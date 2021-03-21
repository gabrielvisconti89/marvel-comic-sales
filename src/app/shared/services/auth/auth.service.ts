import { Injectable, OnInit } from '@angular/core';

import { ConfigService } from '../config/config.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: object = null;
	isLogged: boolean = false;

	constructor(
        public configService: ConfigService,
		public storageService: LocalStorageService,
    ) {
		this.isLogged = this.isUserLogged();
	}

	isUserLogged() {
		var user = this.storageService.get('user');
		if (user == null) {
			return false;
		} else {
			this.user = user;
			return true;
		}
	}

	logout() {
		this.storageService.remove('user');
		this.user = null;
		this.isLogged = false;
	}

	register(email, password, name) {
		var response = {
			success: false,
			data: null
		};
		this.storageService.remove('registered_user');
		var user = {
			email: email,
			password: password,
			name: name
		}
		this.storageService.set('registered_user', user);
		this.user = user;
		response.success = true;
		return response;
	}

	login(email, password) {
		var response = {
			success: false,
			data: null
		};
		var user = this.storageService.get('registered_user');
		if (user == null) {
			response.success = false;
			response.data = 'empty user storage';
			this.user = null;
			console.log(response.data);
			return response;
		}
		if (user.email == email && user.password == password) {
			response.success = true;
			this.user = user;
			this.storageService.set('user', user);
		} else {
			response.success = false;
			response.data = 'wrong credentials';
			this.user = null;
			console.log(response.data);
		}
		this.isLogged = response.success
		return response;
	}

}
