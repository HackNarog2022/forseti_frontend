import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {RequestsHistoryComponent} from "./requests-history/requests-history.component";
import {RequestFormComponent} from "./request-form/request-form.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'new-request', component: RequestFormComponent},
  {path: 'requests', component: RequestsHistoryComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];
