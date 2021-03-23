import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';
import { MarvelService } from '../../shared/services/marvel/marvel.service';
import { ComicService } from '../../shared/services/comic/comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading = false;
	response: any = {
		offset: 0,
		limit: 20,
		count: 20,
		total: 0
	};
	comics: Array<any> = [];

	constructor(
		private router: Router,
		public comicService: ComicService,
		public authService: AuthService,
		public marvelService: MarvelService,
	) {
	}

	ngOnInit(): void {
		this.authService.isLogged = this.authService.isUserLogged();
		this.getComics();
	}

	openMoreInfoPage(comic) {
		this.comicService.selectedComic = comic;
		this.router.navigate(['/more-info'], {replaceUrl: true});
	}

	getComics() {
        this.loading = true;
		this.comicService.comics()
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
