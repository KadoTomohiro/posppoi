import { Routes, RouterModule } from "@angular/router";
import { RegistratorComponent } from "./registrator.component";
import { ModuleWithProviders } from "@angular/core";

const registratorRoutes: Routes = [
  {
    path: '',
    component: RegistratorComponent
  }
];

export const registratorRoutingProvider: any[] = [];

export const registratorRouting: ModuleWithProviders = RouterModule.forChild(registratorRoutes);
