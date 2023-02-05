import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnChanges {
	minutes: number = 0;
	seconds: number = 0;
	
	@Input() active: boolean = false;

	@Input() cycleCount: number = 0;
	@Input() workTime: number = 0;
	@Input() restTime: number = 0;

	inRest: boolean = false;

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

			if (this.minutes === 0) {
				this.inRest = !this.inRest;
				this.minutes = this.inRest ? this.restTime : this.workTime;
			}
		}, 1000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.minutes = this.inRest ? this.restTime : this.workTime;
	}
}
