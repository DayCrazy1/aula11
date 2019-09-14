import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { EventoService } from '../../services/evento.service';
import { Evento } from 'src/app/model/evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
   
  protected evento:Evento = new Evento;

  constructor(
    protected eventoService: EventoService,
    private router:Router 
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    console.log(this.evento);
    this.eventoService.save(this.evento)
    .subscribe(
      res=>{
        alert("Evento solicitado!");
        this.router.navigate(['evento']);
      },
      neg=>{
         alert("Data não disponivel!");
      }
    )
  }
}