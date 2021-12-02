import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { OtacComponent } from './overview/myprofile/otac/otac.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'otac',
  canActivate: [AuthGuard],
  component:OtacComponent},
  {path:'not-found',component:NotFoundComponent},
  {
    path:'identity',
    loadChildren:()=> import('./identity/identity.module')
    .then(mod=>mod.IdentityModule)
  },
  {
    path:'overview',
    canActivate: [AuthGuard],
    loadChildren:()=> import('./overview/overview.module')
    .then(mod=>mod.OverviewModule)
  },
  {path:'**',redirectTo:'not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
