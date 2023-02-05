import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {
	clamp(value: number, min: number, max: number): number {
		return value < min ? min : value > max ? max : value;
	}
}
