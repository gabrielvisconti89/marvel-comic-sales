import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;

	constructor(
		private router: Router,
		public authService: AuthService,
		public storageService: LocalStorageService,
	) {
	}

    ngOnInit(): void {
    }

	openRegisterPage() {
		this.router.navigate(['/register'], {replaceUrl: true});
	}

	verifyFields() {
		var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if (regexp.test(this.email)) {
			if (this.password.length > 5) {
				this.login();
			this.router.navigate(['/home'], {replaceUrl: true});
			} else {
				console.log('password not long enough')
			}
		} else {
			console.log('invalid e-mail')
		}
	}

	login() {
		var response = this.authService.login(this.email, this.password);
		if (response.success == true) {
			this.router.navigate(['/home'], {replaceUrl: true});
		}
 	}

}
