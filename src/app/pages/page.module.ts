import {NgModule} from "@angular/core";
import {ManagementDashboardComponent} from "./dashboard/management-dashboard/management-dashboard.component";
import {BrowserModule} from "@angular/platform-browser";
import {PagesRoutingModule} from "./pages-routing.module";

@NgModule({
  declarations: [
    ManagementDashboardComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule
  ],
  providers: [],
  exports: [],
})
export class PagesModule { }
