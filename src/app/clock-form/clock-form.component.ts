import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils.service';
import { TranslationService } from '../translation.service';

type ClockFormType = {
	cycleCount: FormControl<number>,
	workTime: FormControl<number>,
	restTime: FormControl<number>,
	finalRestTime: FormControl<number>,
};

@Component({
	selector: 'app-clock-form',
	templateUrl: './clock-form.component.html',
	styleUrls: ['./clock-form.component.scss'],
})
export class ClockFormComponent {
	utilities = new UtilsService();
	translations = new TranslationService();

	clockForm: FormGroup<ClockFormType> = new FormGroup({
		cycleCount: new FormControl(5, [
			Validators.required,
			Validators.min(0),
			Validators.max(10),
		]),
		workTime: new FormControl(20, [
			Validators.required,
			Validators.min(20),
			Validators.max(60),
		]),
		restTime: new FormControl(5, [
			Validators.required,
			Validators.min(5),
			Validators.max(30),
		]),
		finalRestTime: new FormControl(20, [
			Validators.required,
			Validators.min(20),
			Validators.max(60),
		])
	} as ClockFormType);

	clockIsActive = false;

	toggleClock(): void {
		this.clockIsActive = !this.clockIsActive;		
	}

	finish(): void {
		this.clockIsActive = false;
	}

	get cycleCount() { return this.clockForm.get('cycleCount') };
	get workTime() { return this.clockForm.get('workTime') };
	get restTime() { return this.clockForm.get('restTime') };
	get finalRestTime() { return this.clockForm.get('finalRestTime') };
}
