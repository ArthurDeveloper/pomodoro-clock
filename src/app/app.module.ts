import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockFormComponent } from './clock-form/clock-form.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
	declarations: [
		AppComponent,
  		ClockFormComponent,
    ClockComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
