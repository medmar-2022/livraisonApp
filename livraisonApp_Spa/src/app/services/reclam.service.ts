import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reclam } from '../models/reclam';
import { Observable } from 'rxjs';

@Injectable()
export class ReclamService {
    baseUrl = environment.apiURL+'reclam/';
constructor(private http: HttpClient) { }
addreclam(model:any){
    return this.http.post(this.baseUrl + 'add',model);
}
getReclams(id:number):Observable<Reclam[]>{
    return this.http.get<Reclam[]>(this.baseUrl+id);
  }

}
