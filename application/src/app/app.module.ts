import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
