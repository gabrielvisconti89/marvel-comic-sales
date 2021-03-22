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

	error: any = {};
	loading: boolean = false;

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
			} else {
				this.error.active = true;
				this.error.message = 'Wrong credentials';
			}
		} else {
			this.error.active = true;
			this.error.message = 'Wrong credentials';
		}
	}
	 
	async login() {
		this.error = {};
		this.loading = true;
		this.authService.login(this.email, this.password)
	  	.toPromise()
	      .then(data => {
			this.loading = false;
	        if (data.id) {       	
				console.log(data);
	        	let response = data;
	        	this.authService.user = response;
				this.authService.isLogged = true;
				this.storageService.set('user', response);
				this.router.navigate(['/home'], {replaceUrl: true});
		  	}
			if (data.error == true) {
				this.error.active = true;
				this.error.message = data.message;
			}
	      }, err => {
			this.loading = false;
	      	console.log(err);
	    });
	}

}
