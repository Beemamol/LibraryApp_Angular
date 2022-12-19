import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';


const myRoute:Routes=[
  {
    path:"",
    component:UserEntryComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"user",
    component:UserLoginComponent
  },
  {
    path:"booksentry",
    component:BooksEntryComponent
  }
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserEntryComponent,
    AdminLoginComponent,
    UserLoginComponent,
    BooksEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
