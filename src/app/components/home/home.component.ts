import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expression = true;

  lista = [{name:"Matias",perfil: 1},{name:"Octavio",perfil: 2},{name:"Mario",perfil: 2}]
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  irAadmin()
  {
  //  this.expression = !this.expression;
    this.route.navigate(['admin']);
  }

}
