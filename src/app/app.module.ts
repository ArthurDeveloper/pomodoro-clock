import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockFormComponent } from './clock-form/clock-form.component';

@NgModule({
	declarations: [
		AppComponent,
  		ClockFormComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
