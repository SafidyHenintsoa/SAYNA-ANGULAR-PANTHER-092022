import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InscritionService } from 'src/app/services/inscrition.service';
import { __values } from 'tslib';

@Component({
  selector: 'private router: Router',
  templateUrl: './inscription-commande.component.html',
  styleUrls: ['./inscription-commande.component.scss'],
})
export class InscriptionCommandeComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: InscritionService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.authService.login().subscribe((res: any[]) => {
      const utilisateur = res.find((ans: any) => {
        return (
          ans.email === this.loginForm.value.email &&
          ans.password === this.loginForm.value.password
        );
      });

      if (utilisateur) {
        alert('Vous etes connecte');

        this.authService.suisConnecte = true;
        this.router.navigateByUrl('/cart/commande');
        this.authService.login_2(this.loginForm.value).subscribe();

        // this.http
        //   .post(
        //     'http://localhost:3000/utilisateurConnecter',
        //     this.loginForm.value
        //   )
        this.loginForm.reset();
      } else {
        alert('Veuillez enregistre');
      }
    });
  }
}
