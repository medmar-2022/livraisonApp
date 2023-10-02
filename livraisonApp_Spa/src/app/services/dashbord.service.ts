import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Count } from '../models/count';
import { DashbordData } from '../models/dashbordData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  baseUrl = environment.apiURL+'dashbord/';
constructor(private http: HttpClient) { }
getSommcount(id:number):Observable<Count>{
  return this.http.get<Count>(this.baseUrl+id)
}
getcount(id:number):Observable<DashbordData>{
  return this.http.get<DashbordData>(this.baseUrl+'count/'+id)
}
}
