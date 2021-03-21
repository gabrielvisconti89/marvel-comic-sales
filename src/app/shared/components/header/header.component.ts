import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	currentPage: string;

	constructor(
		private router: Router,
		public authService: AuthService,
	) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.currentPage = event.urlAfterRedirects.replace('/', '');
				console.log(this.currentPage);
			}
		});
	}

	ngOnInit(): void {
	}

	switchLoginStatus() {
		this.authService.isLogged = !this.authService.isLogged;
	}

	openPage(page: string) {
		this.router.navigate(['/' + page], {replaceUrl: true});
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['/home'], {replaceUrl: true});
	}

}
