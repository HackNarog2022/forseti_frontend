import {Component, OnInit} from '@angular/core';
import {Request} from "../shared/request";
import {Meeting} from "../shared/meeting";
import {Category} from "../shared/category";
import {Place} from "../shared/place";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MeetingService } from '../services/meeting-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  requests: Request[] = [{
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
    expectedExpertise: "Beginner",
    declaredExpertise: "Expert",
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
      expectedExpertise: "Beginner",
      declaredExpertise: "Expert",
      startDate: new Date(),
      endDate: new Date()
    }];


  matchedMeetings$: Observable<Meeting[]> | undefined

  pastMeetings$: Observable<Meeting[]> | undefined

  constructor(private router: Router, private meetingService: MeetingService) {
  }

  ngOnInit(): void {
    this.matchedMeetings$ = this.meetingService.getAllDoneUserMeetings();
    this.pastMeetings$ = this.meetingService.getAllNotDoneUserMeetings();
  }

  openMatchedMeeting(meeting: Meeting) {
    console.log(meeting);
    this.router.navigate(["/meeting-details/", meeting.id])
  }

}
