import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	selectedCharacter: any = null;
	sortedBy: string = 'alphabetical';
	limit: number = 15;

	constructor() { }

	ngOnInit(): void {
	}

}
