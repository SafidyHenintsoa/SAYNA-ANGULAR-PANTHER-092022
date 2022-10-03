import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InscritionService {
  suisConnecte: boolean = false;
  utilisateurConnecter: any;
  email: any;

  constructor(private http: HttpClient) {}

  login() {
    return this.http
      .get<any>('http://localhost:3000/utilisateur')
      .pipe(tap((arg) => (this.suisConnecte = arg)));
  }
  login_2(arg: any) {
    return this.http
      .post('http://localhost:3000/utilisateurConnecter', arg)
      .pipe(tap((arg: any) => (this.email = arg.email)));
  }
  loginout() {
    this.suisConnecte = false;
  }
  getUtilisateurConnecter() {
    return this.http.get(
      'http://localhost:3000/utilisateur?email=' + this.email
    );
  }
}
