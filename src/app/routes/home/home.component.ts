import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private router: Router,
		public authService: AuthService
	) {
	}

	ngOnInit(): void {
		this.authService.isLogged = this.authService.isUserLogged();
	}

	openMoreInfoPage() {
		this.router.navigate(['/more-info'], {replaceUrl: true});
	}

}
