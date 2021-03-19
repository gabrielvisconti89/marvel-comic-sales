import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { CommonModule } from '@angular/common';
import { MyComicsComponent } from './my-comics.component';

import { OptionsModule } from './options/options.module';

const routes: Routes = [
  	{ 
		path: '', 
		component: MyComicsComponent 
	},
];

@NgModule({
	declarations: [
		MyComicsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		NgSelectModule,
		OptionsModule
	],
	exports: [
		RouterModule
	]
})
export class MyComicsModule { }
