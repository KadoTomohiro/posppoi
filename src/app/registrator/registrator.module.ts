import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistratorComponent } from './registrator.component';
import { registratorRouting, registratorRoutingProvider } from "./registrator.routes";
import { BarcodeReaderDirective } from "../barcode-reader/barcode-reader.directive";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../firebase.config";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    registratorRouting,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    RegistratorComponent,
    BarcodeReaderDirective
  ],
  providers: [
    registratorRoutingProvider,
  ]
})
export class RegistratorModule { }
