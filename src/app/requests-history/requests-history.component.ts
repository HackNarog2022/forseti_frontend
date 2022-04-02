import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestsService} from "../services/requests.service";
import {Request} from "../shared/request"
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-requests-history',
  templateUrl: './requests-history.component.html',
  styleUrls: ['./requests-history.component.scss']
})
export class RequestsHistoryComponent implements OnInit {
  private requests: Request[] = [{
    requestId: "62488d4eb75f3f2e56ac8905",
    user: {
      id: "1"
    },
    category: {
      name: "Football",
      inspirations: []
    },
    freeText: "lalallala",
    place: "online",
    expectedExpertise: '1',
    declaredExpertise: '1',
    startDate: new Date(),
    endDate: new Date()
  },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "2"
      },
      category: {
        name: "Books",
        inspirations: []
      },
      freeText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
      place: "Kraków",
      expectedExpertise: '2',
      declaredExpertise: '1',
      startDate: new Date(),
      endDate: new Date()
    }];
  dataSource = new MatTableDataSource<Request>(this.requests);
  displayedColumns: string[] = ['category', 'place',  'startDate', 'endDate', 'expectedExpertise', 'declaredExpertise', 'freeText'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(requestService: RequestsService) {
    // requestService.getAllRequests().subscribe(requests => this.requests = requests)
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
}

