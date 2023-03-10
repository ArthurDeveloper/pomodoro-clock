import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NotificationService } from '../notification.service';
import { UtilsService } from '../utils.service';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnChanges {
	utilities: UtilsService = new UtilsService();
	notifications: NotificationService = new NotificationService();

	minutes: number = 0;
	seconds: number = 0;
	
	@Input() active: boolean = false;

	@Input() cycleCount: number = 0;
	@Input() workTime: number = 0;
	@Input() restTime: number = 0;
	@Input() finalRestTime: number = 0;

	inRest: boolean = false;
	inFinalRest: boolean = false;

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

			if (this.cycleCount == 0) {
				if (!this.inFinalRest) {
					this.inFinalRest = true;
					this.minutes = this.finalRestTime;
					this.seconds = 59;
				}
				
				if (this.minutes === 0) {
					clearInterval(this.interval!);
					this.inFinalRest = false;
					this.minutes = 0;
					this.seconds = 0;
					this.finishCycles();
					this.notifications.notify({ 
						title: 'You\'re finished!', 
						body: 'You may click the start button again to start another pomodoro',
					});
					return;
				}
			}

			if (this.minutes === 0) {
				if (this.inRest) this.cycleCount--;
				this.inRest = !this.inRest;
				this.minutes = this.inRest ? this.restTime : this.workTime;
				if (this.inRest) {
					this.notifications.notify({ 
						title: 'Rest time!', 
						body: 'Refresh your mind from the work' 
					});
				} else if (this.inFinalRest) {
					this.notifications.notify({ 
						title: 'Long rest!', 
						body: 'You have worked enough. Enjoy some more minutes of resting before '+
							  'going into another cycle...' 
					});
				} else {
					this.notifications.notify({ 
						title: 'Back to work!', 
						body: 'Your rest time has ended' 
					});
				}
			}
		}, 1000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.minutes = this.inRest ? this.restTime : this.workTime;
	}
}
