import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
import { MyComicsComponent } from './routes/my-comics/my-comics.component';
import { MyFavoritesComponent } from './routes/my-favorites/my-favorites.component';
import { MoreInfoComponent } from './routes/more-info/more-info.component';
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
    MyComicsComponent,
    MyFavoritesComponent,
    MoreInfoComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
