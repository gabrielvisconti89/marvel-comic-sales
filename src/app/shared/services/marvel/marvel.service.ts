import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

	constructor(
		public http: HttpClient,
		public configService: ConfigService,
	) {
	}

	getCharacters(_limit: any, _offset: any): Observable<any> {
		this.configService.generateParams();
		let limit = 'limit=' + _limit + '&';
		let offset = 'offset=' + _offset + '&';
        let URL = this.configService.baseURL + 'characters?' + limit + offset + this.configService.auth;
        return this.http.get<any>(URL)
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
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
