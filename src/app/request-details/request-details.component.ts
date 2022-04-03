import { Component, OnInit } from '@angular/core';
import {Request} from "../shared/request";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {

  request: Request = {
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
    expectedExpertise: "BEGINNER",
    declaredExpertise: "EXPERT",
    startDate: new Date(),
    endDate: new Date(),
    isNegative: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
