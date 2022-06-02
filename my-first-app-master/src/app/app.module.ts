import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TuHuellaComponent } from './tu-huella/tu-huella.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CompensarComponent } from './compensar/compensar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { GuiasComponent } from './guias/guias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    TuHuellaComponent,
    GaleriaComponent,
    CompensarComponent,
    RegistrarseComponent,
    GuiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
