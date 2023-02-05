import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
	@Input() minutes: number = 0;
	seconds: number = 0;
	@Input() active: boolean = false;

	ngOnInit(): void {
		setInterval(() => {
			if (this.active) {
				if (this.seconds > 0) {
					this.seconds--;
				} else if (this.minutes > 0) {
					this.minutes--;
					this.seconds = 59;
				}
			}
		}, 1000);
	}
}
