import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ProjectComponent } from './project/project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'home',component:HomeComponent} ,
  { path:'',redirectTo:'home', pathMatch:'full'} ,
  { path:'about',component:AboutComponent} ,
  { path:'services',component:ServicesComponent},
  { path:'resume',component:ResumeComponent},
  { path:'contactform',component:ContactformComponent} ,
  { path:'project',component:ProjectComponent}, 
  { path:'**',component:PageNotFoundComponent} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
