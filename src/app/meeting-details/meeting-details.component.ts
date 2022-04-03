import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, shareReplay, switchMap, take} from 'rxjs/operators';
import {MeetingService} from '../services/meeting-service.service';
import {Meeting} from "../shared/meeting";
import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {

  meetingId$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  meeting$: Observable<Meeting> | undefined;
  isFinishingButtonVisible$: Observable<boolean> | undefined;
  isGradingVisible$: Observable<boolean> | undefined;


  constructor(private route: ActivatedRoute, private meetingService: MeetingService, private authService: MsalService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1))
      .subscribe(params => {
        let selectedId = params.get('id') ?? "";
        this.meetingId$.next(selectedId)
      })
    this.meeting$ = this.meetingId$.pipe(
      filter(mid => mid != null),
      switchMap(id => {
        return this.meetingService.getMeetingById(id!);
      }),
      take(1),
      shareReplay(1)
    );
    this.isFinishingButtonVisible$ = this.meeting$.pipe(
      map(m => m.active)
    );
    let userId = () => this.authService.instance.getActiveAccount()?.homeAccountId;
    this.isGradingVisible$ = this.meeting$.pipe(
      map(m => !m.active && Object(m.ratings)
        .keys()
        .filter((k: string) => k != userId())
        .length == 0)
    )
  }

  finishMeeting(): void {
    this.meeting$!.pipe(
      take(1),
      switchMap(m => this.meetingService.setFinished(m.id))
    ).subscribe(m => this.meetingId$.next(this.meetingId$.value));
  }

  addRating(event: any): void {
    console.log(event)
    // let userId = () => this.authService.instance.getActiveAccount()?.homeAccountId;
    // let otherUserId$ = this.meeting$!.pipe(map(m => m.requests.find(r => r.user.id != userId())));
    // this.meeting$!.pipe(
    //   take(1), withLatestFrom(otherUserId$),
    //   switchMap((m, otherUserId) => this.meetingService.addRating(m.id, otherUserId, ))
    // ).subscribe(m =>this.meetingId$.next(this.meetingId$.value) );
  }

}
