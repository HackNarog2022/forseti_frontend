import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  requestForm!: FormGroup;

  possibleExpertises: string[] = ['Beginner', 'Intermediate', 'Expert'];
  possibleCategories: string[] = ['Sport', 'Politics'];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      category: [null, Validators.required],
      freeText: [null, Validators.required],
      place: [null, Validators.required],
      expectedExpertise: [null, Validators.required],
      declaredExpertise: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
  }

  submit() {
    if (!this.requestForm.valid) {
      return;
    }
    console.log(this.requestForm.value);
  }

}
