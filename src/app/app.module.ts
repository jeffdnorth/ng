import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
