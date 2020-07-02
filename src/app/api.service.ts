import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';


@Injectable({
providedIn: 'root'
})

export class ApiService {


redirectUrl: string;
baseUrl:string = "http://localhost/portfolio/php";
constructor(private httpClient : HttpClient) { }


public contact( name,email,phone,message_subject,message ) {
return this.httpClient.post<any>(this.baseUrl + '/form.php', { name,email,phone,message_subject,message })
.pipe(map(Users => {
return Users;
}));
}

}
