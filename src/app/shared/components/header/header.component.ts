import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	isLogged: boolean = false;
	page: string;

	constructor(
		private router: Router,
	) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.page = event.urlAfterRedirects.replace('/', '');
				console.log(this.page);
			}
		});
	}

	ngOnInit(): void {
	}

	switchLoginStatus() {
		this.isLogged = !this.isLogged;
	}

	openPage(page: string) {
		this.router.navigate(['/' + page], {replaceUrl: true});
	}

}
