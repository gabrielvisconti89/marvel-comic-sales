import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';
import { MarvelService } from '../../shared/services/marvel/marvel.service';

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
		public authService: AuthService,
		public marvelService: MarvelService,
	) {
		this.getComics();
	}

	ngOnInit(): void {
		this.authService.isLogged = this.authService.isUserLogged();
	}

	openMoreInfoPage() {
		this.router.navigate(['/more-info'], {replaceUrl: true});
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
