import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './shared/material.module';
import { ResourcesComponent } from './components/resources/resources.component';
import { FormsModule } from '@angular/forms';
import { WeekdaysSelectionComponent } from './components/weekdays-selection/weekdays-selection.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourcesComponent,
    WeekdaysSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
