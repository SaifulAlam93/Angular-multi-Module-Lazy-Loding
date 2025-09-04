import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Navbar here
    children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CourseDetailComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'layout', component: DashboardLayoutComponent },
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
