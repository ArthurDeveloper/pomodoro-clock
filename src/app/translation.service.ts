import { Injectable } from '@angular/core';
import ptBR from '../assets/pt_BR.json';
import enUS from '../assets/en_US.json';

@Injectable({
	providedIn: 'root',
})
export class TranslationService {
	private language: string;

	constructor() { 
		this.language = navigator.language; 
	}

	get(text: string): string {
		if (this.language === 'pt-BR' || this.language === 'pt-PT') {
			type ObjectKey = keyof typeof ptBR;
			return ptBR[text as ObjectKey];
		} else {
			type ObjectKey = keyof typeof enUS;
			return enUS[text as ObjectKey];
		}
	}
}
