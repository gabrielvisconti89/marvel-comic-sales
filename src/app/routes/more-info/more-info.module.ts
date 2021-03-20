import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MoreInfoComponent } from './more-info.component';

const routes: Routes = [
  	{ 
		path: '', 
		component: MoreInfoComponent 
	},
];

@NgModule({
	declarations: [
		MoreInfoComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		NgSelectModule,
	],
	exports: [
		RouterModule
	]
})
export class MoreInfoModule { }
