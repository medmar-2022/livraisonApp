import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coli } from '../models/colis';
import { User } from '../models/user';
import { Count } from '../models/count';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  baseUrl = environment.apiURL+'command/';
constructor(private http: HttpClient) { }
addColi(model: any) {
  return this.http.post(this.baseUrl + 'add',model);
}

getColis():Observable<Coli[]> {
  return this.http.get<Coli[]>(this.baseUrl+'colis');
}
getusers() {
  return this.http.get(this.baseUrl );
}
getColi(id:number):Observable<Coli[]>{
  return this.http.get<Coli[]>(this.baseUrl+'coli/'+id);
}
getcount(id:number){
  return this.http.get<Count>(this.baseUrl+'count/'+id)
}
getuser(id:number):Observable<User>{
  return this.http.get<User>(this.baseUrl+id);
}

}
