import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AvengersComponent } from "./components/avengers/avengers.component";
import { CaruselComponent } from "./components/carusel/carusel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HojaDeVidaComponent } from "./components/hoja-de-vida/hoja-de-vida.component";
import { HeroesComponent } from "./components/heroes/heroes.component";

const APP_ROUTING: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'avengers', component:AvengersComponent},
  {path: 'carusel', component:CaruselComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'HojaDeVida', component:HojaDeVidaComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTING);

