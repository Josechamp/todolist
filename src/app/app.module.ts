import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoCompComponent } from './to-do-comp/to-do-comp.component';
import { ToDoServiceService } from './service/to-do-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoCompComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpModule
  ],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
