import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'pokemon-detail/:id',component:PokemonDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'favorites', component:FavoritesComponent},

  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
