import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddContratComponent} from "./contrat/add-contrat/add-contrat.component";
import {ListContratComponent} from "./contrat/list-contrat/list-contrat.component";
import {ModifierContratComponent} from "./contrat/modifier-contrat/modifier-contrat.component";
import {AddDepartmentsComponent} from "./departement/add-departments/add-departments.component";
import {DeleteDepartmentsComponent} from "./departement/delete-departments/delete-departments.component";
import {ListDepartmentsComponent} from "./departement/list-departments/list-departments.component";
import {UpdateDepartmentsComponent} from "./departement/update-departments/update-departments.component";

const routes: Routes = [
  // {path:'',redirectTo:'user/login',pathMatch:"full"},
  {path:'addContrat',component:AddContratComponent},
  {path:'listContrat',component:ListContratComponent},
  {path:'modifierContrat/:id',component:ModifierContratComponent},
  {path:'addDeparments',component:AddDepartmentsComponent},
  {path:'deleteDepartement/:id',component:DeleteDepartmentsComponent},
  {path:'listDepartement',component:ListDepartmentsComponent},
  {path:'updateDepartement/:id',component:UpdateDepartmentsComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
