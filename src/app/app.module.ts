import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorpoComponent } from './corpoServicos/corpo.component';
import { CorpoExamesComponent } from './corpoExames/corpoExames.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import {} from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CorpoComponent, CorpoExamesComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
