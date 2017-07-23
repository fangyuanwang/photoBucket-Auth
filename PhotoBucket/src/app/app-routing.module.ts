import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "app/+sign-in/sign-in.component";
import { MainComponent } from "app/+main/main.component";
import { PhotoDetailComponent } from "app/+photo-detail/photo-detail.component";
import { AuthGuard } from "app/services/auth.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'signin', pathMatch: 'full', component: SignInComponent },
  { path: 'photo/:photoKey', component: PhotoDetailComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
