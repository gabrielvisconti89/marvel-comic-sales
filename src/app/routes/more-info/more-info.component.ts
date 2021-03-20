import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

	constructor(
		private router: Router,
		public authService: AuthService
	) {
	}

	ngOnInit(): void {
	}

	openHomePage() {
		this.router.navigate(['/home'], {replaceUrl: true});
	}

}
