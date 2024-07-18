import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	viewChild
} from '@angular/core';
import { extend } from 'angular-three';
import * as THREE from 'three';
import fragmentShader from '../../shaders/first-shader/fragment-shader.glsl';
import vertexShader from '../../shaders/first-shader/vertex-shader.glsl';

extend(THREE);

@Component({
	standalone: true,
	template: `
		<ngt-mesh #mesh [position]="[0.5, 0.5, 0]">
			<ngt-plane-geometry />
			<ngt-shader-material [parameters]="{ uniforms, vertexShader, fragmentShader }" />
		</ngt-mesh>
	`,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
	vertexShader = vertexShader;
	fragmentShader = fragmentShader;
	uniforms = {};

	meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh');

	constructor() {
		afterNextRender(() => {
			console.log(this.meshRef())
		})
	}
}
