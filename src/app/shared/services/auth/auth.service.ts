import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ConfigService } from '../config/config.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: object = null;
	isLogged: boolean = false;
	newUser: object = null;

	constructor(
		public http: HttpClient,
        public configService: ConfigService,
		public storageService: LocalStorageService,
    ) {
		this.isLogged = this.isUserLogged();
	}

    register(name, email, password): Observable<any> {
        let URL = this.configService.baseURL + 'auth/add-user.php';
        return this.http.post<any>(URL, 
        {   
            name: name, 
            email: email,
			password: password
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
    }

    login(email, password): Observable<any> {
        let URL = this.configService.baseURL + 'auth/login.php';
        return this.http.post<any>(URL, 
        {   
            email: email, 
            password: password
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
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

	// register(email, password, name) {
	// 	var response = {
	// 		success: false,
	// 		data: null
	// 	};
	// 	this.storageService.remove('registered_user');
	// 	var user = {
	// 		email: email,
	// 		password: password,
	// 		name: name
	// 	}
	// 	this.storageService.set('registered_user', user);
	// 	this.user = user;
	// 	response.success = true;
	// 	return response;
	// }

	// login(email, password) {
	// 	var response = {
	// 		success: false,
	// 		data: null
	// 	};
	// 	var user = this.storageService.get('registered_user');
	// 	if (user == null) {
	// 		response.success = false;
	// 		response.data = 'empty user storage';
	// 		this.user = null;
	// 		console.log(response.data);
	// 		return response;
	// 	}
	// 	if (user.email == email && user.password == password) {
	// 		response.success = true;
	// 		this.user = user;
	// 		this.storageService.set('user', user);
	// 	} else {
	// 		response.success = false;
	// 		response.data = 'wrong credentials';
	// 		this.user = null;
	// 		console.log(response.data);
	// 	}
	// 	this.isLogged = response.success
	// 	return response;
	// }

	private log(message: string) {
		console.log(message);
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
		    console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
		};
	}

}
