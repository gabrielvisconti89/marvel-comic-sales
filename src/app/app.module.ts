import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
import { MyFavoritesComponent } from './routes/my-favorites/my-favorites.component';
import { AddComicComponent } from './dialogs/add-comic/add-comic.component';
import { EditComicComponent } from './dialogs/edit-comic/edit-comic.component';
import { RemoveComicComponent } from './dialogs/remove-comic/remove-comic.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MyFavoritesComponent,
    AddComicComponent,
    EditComicComponent,
    RemoveComicComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
    FormsModule,
    NgSelectModule, 
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
	schemas: [
	  CUSTOM_ELEMENTS_SCHEMA,
	  NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
