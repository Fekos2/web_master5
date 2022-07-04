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

import { UsuariosService } from './services/usuarios.service';

import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


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
    GuiasComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
