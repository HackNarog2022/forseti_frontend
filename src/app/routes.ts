import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {RequestsHistoryComponent} from "./requests-history/requests-history.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'requests', component: RequestsHistoryComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];
