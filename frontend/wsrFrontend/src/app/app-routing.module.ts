import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddWsrComponent } from './add-wsr/add-wsr.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReportComponent } from './report/report.component';
import { ViewWsrComponent } from './view-wsr/view-wsr.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const routes: Routes = [
  {path:'',component:WelcomeComponentComponent},
  {path:'welcome',component:WelcomeComponentComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'report',component:ReportComponent},
  {path:'addWsr',component:AddWsrComponent},
  {path:'login',component:LoginComponent},
  {path:'login',component:LogoutComponent},
  {path:'viewWsr',component:ViewWsrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
