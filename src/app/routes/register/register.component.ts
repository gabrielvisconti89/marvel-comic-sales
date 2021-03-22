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

	error: any = {};
	loading: boolean = false;

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
		if (
			this.password == null ||
			this.email == null ||
			this.name == null ||
			this.confirmationPassword == null
		) {
			this.error.active = true;
			this.error.message = 'Please fill in all the fields.';
			return;
		}
		var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if (regexp.test(this.email) == false) {
			this.error.active = true;
			this.error.message = 'Invalid e-mail.';
			return;
		}
		if (this.password.length < 6) {
			this.error.active = true;
			this.error.message = 'Password is not long enough.';
			return;
		}
		if (this.password != this.confirmationPassword) {
			this.error.active = true;
			this.error.message = 'Passwords are not matching.';
			return;
		}
		if (this.name.length < 1) {
			this.error.active = true;
			this.error.message = 'Name field is empty.';
			return;
		}
		this.register();
	}
	 
	async register() {
		this.error = {};
		this.loading = true;
		this.authService.register(this.name, this.email, this.password)
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
