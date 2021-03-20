import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EditComicComponent } from '../../dialogs/edit-comic/edit-comic.component';
import { RemoveComicComponent } from '../../dialogs/remove-comic/remove-comic.component';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.scss']
})
export class MyComicsComponent implements OnInit {

	bsModalRef: BsModalRef;

	constructor(
		public authService: AuthService,
		private modalService: BsModalService
	) {
	}

	ngOnInit(): void {
	}

	openEditComicModal() {
		this.bsModalRef = this.modalService.show(EditComicComponent, Object.assign({}, { class: 'custom-modal modal-lg' }));
	}

	openRemoveComicModal() {
		this.bsModalRef = this.modalService.show(RemoveComicComponent, Object.assign({}, { class: 'custom-modal modal-lg' }));
	}

}
