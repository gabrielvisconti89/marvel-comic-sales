import { Component, OnInit } from '@angular/core';

import { MarvelService } from '../../../shared/services/marvel/marvel.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

    loading = false;
	response: any = {
		offset: 0,
		limit: 20,
		count: 20,
		total: 0
	};
	characters: Array<any> = [];
	selectedCharacter: any = null;

	sortedBy: string = 'alphabetical';
	limit: number = 15;
	offset: number = 0;

	constructor(
		public marvelService: MarvelService,
	) {
		this.getCharacters();
	}

	ngOnInit(): void {
	}

	getCharacters() {
        this.loading = true;
		this.marvelService.getCharacters(this.response.limit, this.response.offset + 20)
	  	.toPromise()
			.then(data => {
				this.loading = false;
				this.response = data.data;
				this.characters = this.characters.concat(data.data.results);
			}, err => {
				this.loading = false;
				console.log(err);
			});
	}

    onScrollToEnd() {
        this.getCharacters();
    }

}
