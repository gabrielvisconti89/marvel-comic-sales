import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

	selectedCharacter: any = null;
	sortedBy: string = 'alphabetical';
	limit: number = 15;

	constructor() { }

	ngOnInit(): void {
	}

}
