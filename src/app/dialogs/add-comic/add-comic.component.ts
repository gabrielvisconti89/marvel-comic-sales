import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthService } from '../../shared/services/auth/auth.service';
import { MarvelService } from '../../shared/services/marvel/marvel.service';
import { ComicService } from '../../shared/services/comic/comic.service';

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

	selectedComic: any = null;
	condition: string = null;
	price: string = null;
	description: string = null;

    constructor(
		public bsModalRef: BsModalRef,
		public authService: AuthService,
		public comicService: ComicService,
		public marvelService: MarvelService,
	) {
		this.getComics();
	}

    ngOnInit(): void {
    }

	cleanSelection() {
		this.selectedComic = null;
		this.condition = null;
		this.price = null;
		this.description = null;
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

	createNewComic() {
		this.comicService.newComic.object = this.selectedComic;
		this.comicService.newComic.title = this.selectedComic.title;
		this.comicService.newComic.condition = this.condition;
		this.comicService.newComic.price = this.price;
		this.comicService.newComic.description = this.description;
		this.addComic();
	}

	addComic() {
        this.loading = true;
		this.comicService.addComic()
	  	.toPromise()
			.then(data => {
				this.loading = false;
				this.response = data.data;
				this.bsModalRef.hide();
			}, err => {
				this.loading = false;
				console.log(err);
			});
	}

}
