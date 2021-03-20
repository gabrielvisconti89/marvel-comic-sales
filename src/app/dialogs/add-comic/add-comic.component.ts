import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit {

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
