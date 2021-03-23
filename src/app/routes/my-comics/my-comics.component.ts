import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EditComicComponent } from '../../dialogs/edit-comic/edit-comic.component';
import { RemoveComicComponent } from '../../dialogs/remove-comic/remove-comic.component';

import { AuthService } from '../../shared/services/auth/auth.service';
import { ComicService } from '../../shared/services/comic/comic.service';

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.scss']
})
export class MyComicsComponent implements OnInit {

	loading: boolean = false;
	bsModalRef: BsModalRef;
	comics: Array<any> = [];

	constructor(
		public authService: AuthService,
		public comicService: ComicService,
		private modalService: BsModalService,
		private router: Router
	) {
	}

	ngOnInit(): void {
		this.getComicsByUser();
	}

	openEditComicModal(comic) {
		this.bsModalRef = this.modalService.show(EditComicComponent, Object.assign({}, { class: 'custom-modal modal-lg' }));
	}

	openRemoveComicModalcomic() {
		this.bsModalRef = this.modalService.show(RemoveComicComponent, Object.assign({}, { class: 'custom-modal modal-lg' }));
	}

	openMoreInfoPage(comic) {
		this.comicService.selectedComic = comic;
		this.router.navigate(['/more-info'], {replaceUrl: true});
	}

	getComicsByUser() {
        this.loading = true;
		this.comicService.comicsByUser()
	  	.toPromise()
			.then(data => {
				this.loading = false;
				this.comics = data;
				for (let comic of this.comics) {
					comic.object = JSON.parse(comic.object);
				}
			}, err => {
				this.loading = false;
				console.log(err);
			});
	}

}
