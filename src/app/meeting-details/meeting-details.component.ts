import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { MeetingService } from '../services/meeting-service.service';
import {Meeting} from "../shared/meeting";
import {Request} from "../shared/request";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {

  requests: Request[] = [{
    requestId: "62488d4eb75f3f2e56ac8905",
    user: {
      id: "1",
      email: "lalala@la.pl"
    },
    category: {
      name: "Football",
      inspirations: []
    },
    freeText: "lalallala",
    place: "online",
    expectedExpertise: "BEGINNER",
    declaredExpertise: "",
    startDate: new Date(),
    endDate: new Date(),
    isNegative: false
  },
    {
      requestId: "62488d4eb75f3f2e56ac8905",
      user: {
        id: "2",
        email: "ook.asdasd@d.pl"
      },
      category: {
        name: "Books",
        inspirations: []
      },
      freeText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
      place: "Kraków",
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date(),
      isNegative: false,
    }];

  meeting$: Observable<Meeting> | undefined;

  constructor(private route: ActivatedRoute, private meetingService: MeetingService) {
  }

  ngOnInit(): void {
    this.meeting$ = this.route.paramMap.pipe(
      switchMap(params => {
        let selectedId = params.get('id') ?? "";
        return this.meetingService.getMeetingById(selectedId);
      }),
      take(1)
    );
  }

}
