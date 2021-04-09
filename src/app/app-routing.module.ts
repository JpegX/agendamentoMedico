import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CorpoExamesComponent } from './corpoExames/corpoExames.component';
import { BrowserModule } from '@angular/platform-browser';
import { CorpoComponent } from './corpoServicos/corpo.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],

  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'agendamento', pathMatch: 'full' },
      { path: 'agendamento', component: CorpoComponent },
      { path: 'pesquisa/:exame', component: CorpoExamesComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}
