import { Component } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [
		UtilsService
	]
})
export class AppComponent {
	title = 'pomodoro-clock';
}
