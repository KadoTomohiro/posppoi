import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistratorComponent } from './registrator.component';
import { registratorRouting, registratorRoutingProvider } from "./registrator.routes";

@NgModule({
  imports: [
    CommonModule,
    registratorRouting
  ],
  declarations: [
    RegistratorComponent
  ],
  providers: [
    registratorRoutingProvider
  ]
})
export class RegistratorModule { }
