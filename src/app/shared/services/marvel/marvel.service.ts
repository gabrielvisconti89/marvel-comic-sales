import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';

import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

	baseURL: string = 'https://gateway.marvel.com/v1/public/';
	auth: string;

	publicKey: string = '92101d341d580b7898570181e8e4fda8';
	privateKey: string = 'XXX';

	timestamp: any;
	hash: any;

	constructor(
		public http: HttpClient,
		public configService: ConfigService,
	) {
	}

	getCharacters(_limit: any, _offset: any): Observable<any> {
		this.generateParams();
		let limit = 'limit=' + _limit + '&';
		let offset = 'offset=' + _offset + '&';
        let URL = this.baseURL + 'characters?' + limit + offset + this.auth;
        return this.http.get<any>(URL)
        .pipe(
            // tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
    }

	getComics(_limit: any, _offset: any): Observable<any> {
		this.generateParams();
		let limit = 'limit=' + _limit + '&';
		let offset = 'offset=' + _offset + '&';
        let URL = this.baseURL + 'comics?' + limit + offset + this.auth;
        return this.http.get<any>(URL)
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
    }
	
	generateParams() {
		this.timestamp = new Date().getTime();
		var str = this.timestamp + this.privateKey + this.publicKey;
		this.hash = Md5.hashStr(str);
		this.auth = 'ts=' + this.timestamp + '&apikey=' + this.publicKey + '&hash=' + this.hash;
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
