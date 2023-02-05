import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
	minutes: number = 5;
	seconds: number = 59;

	ngOnInit(): void {
		setInterval(() => {
			if (this.seconds > 0) {
				this.seconds--;
			} else if (this.minutes > 0) {
				this.minutes--;
				this.seconds = 59;
			}
		}, 1000);
	}

}
