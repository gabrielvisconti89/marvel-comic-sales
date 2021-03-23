import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { ConfigService } from '../config/config.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

	newComic: any = {};
	selectedComic: any = {};
	editedComic: any = {};

	constructor(
		public http: HttpClient,
		public authService: AuthService,
        public configService: ConfigService,
		public storageService: LocalStorageService,
    ) {
	}

	addComic(): Observable<any> {
        let URL = this.configService.baseURL + 'comic/add-comic.php';
        return this.http.post<any>(URL, 
        {   
            userId: this.authService.user.id, 
            title: this.newComic.title,
			condition: this.newComic.condition,
			price: this.newComic.price,
			object: JSON.stringify(this.newComic.object)
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
    }

	editComic(): Observable<any> {
        let URL = this.configService.baseURL + 'comic/edit-comic.php';
        return this.http.post<any>(URL, 
        {   
			id: this.editedComic.id,
            title: this.editedComic.title,
			condition: this.editedComic.condition,
			price: this.editedComic.price,
			object: JSON.stringify(this.editedComic.object)
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
    }

	comicsByUser(): Observable<any> {
        let URL = this.configService.baseURL + 'comic/comics-by-user.php';
        return this.http.post<any>(URL, 
        {   
            userId: this.authService.user.id 
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError(URL, [])));
    }

	comics(): Observable<any> {
        let URL = this.configService.baseURL + 'comic/comics.php';
        return this.http.post<any>(URL, 
        {})
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
