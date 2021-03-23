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

	user: any = null;
	isLogged: boolean = false;
	newUser: any = {};

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
