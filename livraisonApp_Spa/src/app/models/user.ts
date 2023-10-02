import { Coli } from "./colis";

export interface User {
    userId:number;
    storeName:string;
    email:string;
    password:string;
    ville:string;
    telephone:string;
    ripurl:string;
    cinUrl:string;
    colis:Coli
    

        
}