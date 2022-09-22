import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss'],
})
export class EshopComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
