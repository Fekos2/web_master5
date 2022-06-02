import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})


export class RegistrarseComponent implements OnInit {

  constructor() { }

  handleSubmit(event: any): void {
    event.preventDefault();
    const data = new FormData(event.target);
    
    const value = JSON.stringify({'name': data.get('name'),'email':data.get('email'),'cellphone':data.get('cellphone')});
    /*const value = {
      'name': data.get('name'), 
      'email': data.get('email'), 
      'cellphone': data.get('cellphone')
    };*/
    console.log( value );
  }

  ngOnInit(): void {
    const form = document.querySelector('form')!;
    form.addEventListener('submit', this.handleSubmit);
  }

}