import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meeting } from '../shared/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) {
  }

  getAllDoneUserMeetings() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Meeting[]>('/api/doneUserMeetings', httpOptions);
  }

  getMeetingById(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Meeting>(`/api/meeting/${id}`, httpOptions);
  }

  getAllNotDoneUserMeetings() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Meeting[]>('/api/notDoneUserMeetings', httpOptions);
  }

  setFinished(id: string) {
    return this.http.post('/api/setFinished/?meetingId=' + id, null);
  }

  addRating(meetingId: string, userId:string, rating: number) {
    return this.http.post('/api/addRating/', null, {params:{meetingId, userId, rating}})
  }
}
