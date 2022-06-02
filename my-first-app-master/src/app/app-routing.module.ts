import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TuHuellaComponent } from './tu-huella/tu-huella.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CompensarComponent } from './compensar/compensar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { GuiasComponent } from './guias/guias.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'tu-huella',
    component: TuHuellaComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'compensar',
    component: CompensarComponent
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent
  },
  {
    path: 'guias',
    component: GuiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
