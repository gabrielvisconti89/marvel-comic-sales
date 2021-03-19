import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { CommonModule } from '@angular/common';
import { MyComicsComponent } from './my-comics.component';

import { OptionsComponent } from '../../shared/components/options/options.component';

const routes: Routes = [
  	{ 
		path: '', 
		component: MyComicsComponent 
	},
];

@NgModule({
	declarations: [
		MyComicsComponent,
		OptionsComponent
	],
	imports: [
			CommonModule,
			RouterModule.forChild(routes),
			FormsModule,
			NgSelectModule
	],
	exports: [
		RouterModule
	]
})
export class MyComicsModule { }
