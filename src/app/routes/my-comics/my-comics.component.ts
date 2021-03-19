import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.scss']
})
export class MyComicsComponent implements OnInit {

	constructor(
		public authService: AuthService
	) {
	}

	ngOnInit(): void {
	}

}
