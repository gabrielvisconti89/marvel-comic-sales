import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
    title = 'marvel-comic-sales';
	currentPage: string;

    constructor(
    	public router: Router,
    ) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.currentPage = event.urlAfterRedirects.replace('/', '');
				console.log(this.currentPage);
			}
		});
    }
}
