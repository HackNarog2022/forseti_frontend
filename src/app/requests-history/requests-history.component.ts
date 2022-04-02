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
  private requests: Request[] = [];
  dataSource = new MatTableDataSource<Request>(this.requests);
  displayedColumns: string[] = ['category', 'place', 'freeText', 'startDate', 'endDate', 'expectedExpertise', 'declaredExpertise'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(requestService: RequestsService) {
    // requestService.getAllRequests().subscribe(requests => this.requests = requests)
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
