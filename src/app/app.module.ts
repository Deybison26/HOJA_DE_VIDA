import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvengersComponent } from './components/avengers/avengers.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { HomeComponent } from './components/home/home.component';

//RUTAS
import { APP_ROUTES } from './app.routes';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';

//SERVICIOS


//BASE DE DATOS
@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    AvengersComponent,
    CaruselComponent,
    HomeComponent,
    HojaDeVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent,CaruselComponent]
})
export class AppModule { }
