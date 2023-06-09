import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ManagementDashboardComponent} from "./dashboard/management-dashboard/management-dashboard.component";


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'management-dashboard',
          pathMatch: 'full',
          component: ManagementDashboardComponent
        }

      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
