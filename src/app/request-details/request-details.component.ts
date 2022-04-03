import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { bufferCount, publishReplay, shareReplay, switchMap, take } from 'rxjs/operators';
import { RequestsService } from '../services/requests.service';
import {Request} from "../shared/request";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {

  request$: Observable<Request> | undefined;

  constructor(private route: ActivatedRoute, private requestService: RequestsService) { }

  ngOnInit(): void {
    this.request$ = this.route.paramMap.pipe(
      switchMap(params => {
        let selectedId = params.get('id') ?? "";
        return this.requestService.getRequest(selectedId);
      }),
      take(1),
      shareReplay(1)
    );
  }

}
function replay(): import("rxjs").OperatorFunction<Request, Request> {
  throw new Error('Function not implemented.');
}

