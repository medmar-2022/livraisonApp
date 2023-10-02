import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coli } from '../models/colis';
import { Observable } from 'rxjs';
import { Count } from '../models/count';
import { DashbordData } from '../models/dashbordData';
import { User } from '../models/user';
import { Reclam } from '../models/reclam';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiURL+'admin/'
constructor(private http: HttpClient) { }
updateColi(id:number,model:any){
return this.http.put(this.baseUrl+id,model)
}
updateUser(id:number,model:any){
  return this.http.put(this.baseUrl+'updateuser/'+id,model)
  }
  updateReclam(id:number,model:any){
    return this.http.put(this.baseUrl+'updatereclam/'+id,model)
    }
getColis():Observable<Coli[]> {
  return this.http.get<Coli[]>(this.baseUrl+'getcolis');
}
getSommcount():Observable<Count>{
  return this.http.get<Count>(this.baseUrl+'getcount')
}
getcount():Observable<DashbordData>{
  return this.http.get<DashbordData>(this.baseUrl+'data/')
}
getUsers():Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl+'users');
}
getreclams():Observable<Reclam[]> {
  return this.http.get<Reclam[]>(this.baseUrl+'reclamation');
}
}
