import { Injectable } from '@angular/core';

type NotificationType = {
	title: string,
	body: string
};

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	private allowed: boolean;

	constructor() {
		this.allowed = false;
		switch (Notification.permission) {
			case 'granted':
				this.allowed = true;
				break;
			case 'default':
				Notification.requestPermission().then((value: string) => {
					this.allowed = value === 'granted';
				});
				break;
		}
	}

	notify({ title, body }: NotificationType): void {
		if (this.allowed) {
			const notification = new Notification(title, {
				body,
				vibrate: 2,
			});
		}
	}
}
