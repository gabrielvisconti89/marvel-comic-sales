import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  	baseURL: string = 'https://gateway.marvel.com/v1/public/';
	auth: string;

	publicKey: string = '92101d341d580b7898570181e8e4fda8';
	privateKey: string = 'dfde20a42d1d7eea798521ad28e96caea019d709';

	timestamp: any;
	hash: any;

    constructor() {
	}
	
	generateParams() {
		this.timestamp = new Date().getTime();
		var str = this.timestamp + this.privateKey + this.publicKey;
		this.hash = Md5.hashStr(str);
		this.auth = 'ts=' + this.timestamp + '&apikey=' + this.publicKey + '&hash=' + this.hash;
	}
	

}
