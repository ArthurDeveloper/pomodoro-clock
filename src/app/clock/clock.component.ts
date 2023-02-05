import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnChanges {
	utilities: UtilsService = new UtilsService();

	minutes: number = 0;
	seconds: number = 0;
	
	@Input() active: boolean = false;

	@Input() cycleCount: number = 0;
	@Input() workTime: number = 0;
	@Input() restTime: number = 0;

	inRest: boolean = false;

	interval: ReturnType<typeof setInterval> | null = null;

	@Output() end: EventEmitter<null> = new EventEmitter();

	finishCycles(): void {
		this.end.emit();
	}

	ngOnInit(): void {
		this.interval = setInterval(() => {
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
				this.cycleCount--;
			}

			if (this.cycleCount == 0) {
				clearInterval(this.interval!);
				this.minutes = 0;
				this.seconds = 0;
				this.finishCycles();
			}
		}, 1000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.minutes = this.inRest ? this.restTime : this.workTime;
	}
}
