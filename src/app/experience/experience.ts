import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraph } from './scene-graph';

@Component({
	selector: 'app-experience',
	standalone: true,
	template: `
		<ngt-canvas
			[sceneGraph]="sceneGraph"
			[orthographic]="true"
			[camera]="{ position: [0, 0, 1], left: 0, right: 1, top: 1, bottom: 0, near: 0.1, far: 1000 }"
		/>
	`,
	// left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: `
		:host {
			display: block;
			height: 100dvh;
		}
	`,
	imports: [NgtCanvas],
})
export class Experience {
	sceneGraph = SceneGraph;

	constructor() {}
}
