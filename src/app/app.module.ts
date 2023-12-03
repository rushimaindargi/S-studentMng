import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowallpostsComponent } from './showallposts/showallposts.component';
import { PostsService } from './posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowallpostsComponent,
    LoginComponent,
    CreatepostComponent,
    NavbarComponent,
    UpdatepostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
