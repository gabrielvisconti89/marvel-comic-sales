import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth/auth.service';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	name: string;
	email: string;
	password: string;
	confirmationPassword: string;

	constructor(
		private router: Router,
		public authService: AuthService,
		public storageService: LocalStorageService,
	) {
	}

	ngOnInit(): void {
	}
	
	openLoginPage() {
		this.router.navigate(['/login'], {replaceUrl: true});
	}

	verifyFields() {
		var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if (regexp.test(this.email) == false) {
			return console.log('invalid e-mail');
		}
		if (this.password.length < 6) {
			return console.log('password is not long enough');
		}
		if (this.password != this.confirmationPassword) {
			return console.log('passwords not matching');
		}
		if (this.name.length < 1) {
			return console.log('name field is empty');
		}
		this.register();
	}

	register() {
		var response = this.authService.register(this.email, this.password, this.name);
		if (response.success == true) {
			this.router.navigate(['/home'], {replaceUrl: true});
		} else {
			console.log(response);
		}
	}

}
