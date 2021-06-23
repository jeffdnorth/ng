import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { EducComponent } from './educ/educ.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    EducComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
