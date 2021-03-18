import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { OptionsComponent } from './options.component';

const routes: Routes = [
  	{ 
		path: '', 
		component: OptionsComponent 
	},
];

@NgModule({
	declarations: [
		OptionsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		NgSelectModule, 
	]
})
export class OptionsModule { }
