import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
// import { AuthGuard } from './guards/auth.guard';
// import { NotAuthGuard } from './guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';




// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [NotAuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [NotAuthGuard]

  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard]

  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'delete-blog/:id',
    component: DeleteBlogComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'user/:username',
    component: PublicProfileComponent,
    // canActivate: [AuthGuard]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
