import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private url = "json/store.json";
  constructor(private http: HttpClient) { }
  getStoreList(): Observable<any> {
    return this.http.get(environment.baseUrl + this.url);
  }
}
