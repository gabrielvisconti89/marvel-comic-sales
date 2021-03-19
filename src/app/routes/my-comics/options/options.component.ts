import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddComicComponent } from '../../../dialogs/add-comic/add-comic.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

	bsModalRef: BsModalRef;

	selectedCharacter: any = null;
	sortedBy: string = 'alphabetical';
	limit: number = 15;

	constructor(private modalService: BsModalService) {}

	ngOnInit(): void {
	}

	openAddComicModal() {
		this.bsModalRef = this.modalService.show(AddComicComponent, Object.assign({}, { class: 'custom-modal modal-lg' }));
		// this.bsModalRef.content.closeBtnName = 'Close';
	}

}
