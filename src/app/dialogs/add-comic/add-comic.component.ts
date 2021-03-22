import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthService } from '../../shared/services/auth/auth.service';
import { MarvelService } from '../../shared/services/marvel/marvel.service';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit {

    loading = false;
	response: any = {
		offset: 0,
		limit: 20,
		count: 20,
		total: 0
	};
	comics: Array<any> = [];

	selectedComic: object = null;
	condition: string = null;
	price: string = null;
	description: string = null;

    constructor(
		public bsModalRef: BsModalRef,
		public authService: AuthService,
		public marvelService: MarvelService,
	) {
		this.getComics();
	}

    ngOnInit(): void {
    }

	cleanSelection() {
		this.selectedComic = null;
	}

	getComics() {
        this.loading = true;
		this.marvelService.getComics(this.response.limit, this.response.offset + 20)
	  	.toPromise()
			.then(data => {
				this.loading = false;
				this.response = data.data;
				this.comics = this.comics.concat(data.data.results);
			}, err => {
				this.loading = false;
				console.log(err);
			});
	}

}
