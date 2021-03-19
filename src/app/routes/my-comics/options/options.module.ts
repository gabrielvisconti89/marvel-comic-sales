import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { OptionsComponent } from './options.component';

@NgModule({
	declarations: [
		OptionsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgSelectModule, 
	],
    exports: [
        OptionsComponent
    ]
})
export class OptionsModule { }
