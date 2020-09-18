import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  id;

  constructor(private router: ActivatedRoute) {
    this.id = this.router.snapshot.params.id;
    
  }
}
