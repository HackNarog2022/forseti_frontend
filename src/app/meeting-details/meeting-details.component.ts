import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, switchMap, take } from 'rxjs/operators';
import { MeetingService } from '../services/meeting-service.service';
import {Meeting} from "../shared/meeting";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {

  meeting$: Observable<Meeting> | undefined;

  constructor(private route: ActivatedRoute, private meetingService: MeetingService) {
  }

  ngOnInit(): void {
    this.meeting$ = this.route.paramMap.pipe(
      switchMap(params => {
        let selectedId = params.get('id') ?? "";
        return this.meetingService.getMeetingById(selectedId);
      }),
      take(1),
      shareReplay(1)
    );
  }

}
