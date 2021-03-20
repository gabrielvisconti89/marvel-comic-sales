import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.scss']
})
export class EditComicComponent implements OnInit {

	selectedComic: object = null;
	condition: string = null;
	price: string = null;
	description: string = null;

    constructor(public bsModalRef: BsModalRef) {}

	ngOnInit(): void {
	}

	cleanSelection() {
		this.selectedComic = null;
	}

}
