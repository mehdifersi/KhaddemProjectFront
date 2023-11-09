import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { FooterComponent } from './footer/footer.component';
import { AddContratComponent } from './contrat/add-contrat/add-contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { ModifierContratComponent } from './contrat/modifier-contrat/modifier-contrat.component';
import { AddDepartmentsComponent } from './departement/add-departments/add-departments.component';
import { DeleteDepartmentsComponent } from './departement/delete-departments/delete-departments.component';
import { ListDepartmentsComponent } from './departement/list-departments/list-departments.component';
import { UpdateDepartmentsComponent } from './departement/update-departments/update-departments.component';
import { UpdateEquipeComponent } from './equipe/update-equipe/update-equipe.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { AddDetailEquipeComponent } from './detailEquipe/add-detail-equipe/add-detail-equipe.component';
import { ListDetailEquipeComponent } from './detailEquipe/list-detail-equipe/list-detail-equipe.component';
import { UpdateDetailEquipeComponent } from './detailEquipe/update-detail-equipe/update-detail-equipe.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AddContratComponent,
    ListContratComponent,
    ModifierContratComponent,
    AddDepartmentsComponent,
    DeleteDepartmentsComponent,
    ListDepartmentsComponent,
    UpdateDepartmentsComponent,
    UpdateEquipeComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    AddDetailEquipeComponent,
    ListDetailEquipeComponent,
    UpdateDetailEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JsonPipe,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
