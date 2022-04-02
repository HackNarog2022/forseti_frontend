import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {RequestFormComponent} from "./request-form/request-form.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'new-request', component: RequestFormComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];
