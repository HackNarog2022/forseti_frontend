import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {RequestsHistoryComponent} from "./requests-history/requests-history.component";
import {RequestFormComponent} from "./request-form/request-form.component";
import {EntryComponent} from "./entry/entry.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'new-request', component: RequestFormComponent},
  {path: 'requests', component: RequestsHistoryComponent},
  {path: '', component: EntryComponent},
  // {path: '', redirectTo: '/main', pathMatch: 'full'},
];
