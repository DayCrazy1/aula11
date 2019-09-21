import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;
  protected id:string = null;

  constructor(
    protected usuarioService: UsuarioService,
    private router:Router,
    protected ativeRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ativeRouter.snapshot.paramMap.get("id");
    if (this.id){
      this.usuarioService.get(this.id).subscribe(
        res=>{
          this.usuario = res;
        },
        erro => this.id = null
      )
    }
  }

  onsubmit(form){
    console.log(this.usuario);
    if (this.id){
    }
    else{
      this.usuarioService.update(this.usuario, this.id)
      .subscribe(
        res=>{
          //console.log("Cadastrado!", res);
          alert("Atualizado!");
          this.router.navigateByUrl('/',{ skipLocationChange: true})
          .then(() =>
          this.router.navigate(['add-usuario']));
          //this.router.navigate(["addusuario"])
        },
        xuxu=>{
         console.log("Não Atualizado!",xuxu);
          alert("Não Atualizado!");
        }
      )
    }

  }
}