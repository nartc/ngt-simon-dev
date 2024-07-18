import { Component } from '@angular/core';
import { Experience } from './experience/experience';

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <app-experience />
	`,
	imports: [Experience],
})
export class AppComponent {}
