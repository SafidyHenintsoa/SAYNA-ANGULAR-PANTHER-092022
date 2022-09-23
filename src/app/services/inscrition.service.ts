import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InscritionService {
  suisConnecte: boolean = false;

  constructor(private http: HttpClient) {}

  login() {
    return this.http
      .get<any>('http://localhost:3000/utilisateur')
      .pipe(tap((arg) => (this.suisConnecte = arg)));
  }
  loginout() {
    this.suisConnecte = false;
  }
}
