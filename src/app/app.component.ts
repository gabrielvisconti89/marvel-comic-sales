import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class AppComponent {
	
    title = 'marvel-comic-sales';
	currentPage: string;

	isHeaderEnabled: boolean = true;
	isFooterEnabled: boolean = true;

    constructor(
    	public router: Router,
    ) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.currentPage = event.urlAfterRedirects.replace('/', '');
				console.log(this.currentPage);
				if (this.currentPage == 'register' || this.currentPage == 'login') {
					this.isHeaderEnabled = false;
					this.isFooterEnabled = false;
				} else {
					this.isHeaderEnabled = true;
					this.isFooterEnabled = true;
				}
			}
		});
    }
}
