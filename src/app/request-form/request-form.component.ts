import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from "../services/category.service";
import {Category} from "../shared/category";
import {RequestsService} from "../services/requests.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  requestForm!: FormGroup;

  possibleExpertises: string[] = ['BEGINNER', 'INTERMEDIATE', 'EXPERT'];
  possibleCategories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private requestsService: RequestsService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: MsalService
  ) {
  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      category: [null, Validators.required],
      freeText: [null, Validators.required],
      place: [null, Validators.required],
      expectedExpertise: [null, Validators.required],
      declaredExpertise: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });

    this.categoryService.getAllCategories().subscribe(
      categories => this.possibleCategories = categories,
      () => {
        this.possibleCategories = []
        console.error("Error fetching categories")
      }
    )
  }

  submit() {
    if (!this.requestForm.valid) {
      console.log('form is invalid')
      return;
    }
    const request = {
      requestId: null,
      user: {id: this.authService.instance.getActiveAccount()?.localAccountId ?? 'unknown'},
      category: this.requestForm.value.category,
      freeText: this.requestForm.value.freeText,
      place: this.requestForm.value.place,
      expectedExpertise: this.requestForm.value.expectedExpertise,
      declaredExpertise: this.requestForm.value.declaredExpertise,
      startDate: this.requestForm.value.startDate,
      endDate: this.requestForm.value.endDate
    };
    console.log('Saving request:', request)
    this.requestsService.createRequest(request).subscribe(() => {
      const navigationDetails: string[] = ['/'];
      this.snackBar.open('Successfully saved request!')
      this.router.navigate(navigationDetails)
    })
  }

}
