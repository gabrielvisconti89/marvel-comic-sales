import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
  	{ 
		path: '', 
		component: HomeComponent 
	},
];

@NgModule({
	declarations: [
		HomeComponent
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
export class HomeModule { }
