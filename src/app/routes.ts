import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {RequestFormComponent} from "./request-form/request-form.component";
import {MeetingDetailsComponent} from "./meeting-details/meeting-details.component";
import {RequestDetailsComponent} from "./request-details/request-details.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'new-request', component: RequestFormComponent},
  {path: 'meeting-details', component:MeetingDetailsComponent},
  {path: 'request-details', component: RequestDetailsComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];
