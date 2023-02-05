import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { UtilsService } from './utils.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [
		UtilsService,
		NotificationService,
	]
})
export class AppComponent {
	title = 'pomodoro-clock';
}
