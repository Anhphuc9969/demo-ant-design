import {NgModule} from "@angular/core";
import {ManagementDashboardComponent} from "./dashboard/management-dashboard/management-dashboard.component";
import {PagesRoutingModule} from "./pages-routing.module";

@NgModule({
  declarations: [
    ManagementDashboardComponent
  ],
  imports: [
    PagesRoutingModule
  ],
  providers: [],
})
export class PagesModule { }
