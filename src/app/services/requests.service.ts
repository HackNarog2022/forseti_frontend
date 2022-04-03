import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Request} from "../shared/request";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllRequests() {
    return this.http.get<Request[]>('/api/requests', this.httpOptions);
  }

  getRequest(id: string) {
    return this.http.get<Request>(`/api/request/${id}`, this.httpOptions);
  }

  createRequest(request: Request) {
    return this.http.post<void>('/api/requests', request, this.httpOptions);
  }


}
