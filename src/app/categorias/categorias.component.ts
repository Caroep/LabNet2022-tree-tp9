import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from './models/categoria';
import { CategoriasService } from './services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit {
  
  public listCategories: Array<Categoria> = [];
  public categoria: Categoria;
  public mostrarLista: boolean;
  public insertar: boolean;
  public formCategoria!: FormGroup;
  public ingreso: boolean;

  

  constructor(private readonly fb: FormBuilder, private catService: CategoriasService,private rot: Router) { 
    this.categoria = {} as Categoria;
    this.mostrarLista = true;
    this.insertar = false;
    this.ingreso = false;
  }

  ngOnInit(): void {
    this.initForm();
    this.mostrarCategorias();
  }
  
  activar(){
    this.insertar = true;
    this.mostrarLista = false;
  }
   
  initForm(){
    this.formCategoria = this.fb.group({
      CategoryName: new FormControl(this.categoria.CategoryName, [
        Validators.required, 
        Validators.maxLength(40)
      ]),
      Description : new FormControl(this.categoria.Description, [
        Validators.minLength(0), 
        Validators.maxLength(255)
      ])
    });
  }

  get f(){ return this.formCategoria.controls}

    cancelar(){
      this.formCategoria.reset();
      this.rot.navigate(['categorias']);

    }

    guardar(){
        this.categoria.CategoryName = this.formCategoria.get('CategoryName')?.value;
        this.categoria.Description = this.formCategoria.get('Description')?.value;
        if(!this.ingreso){
        this.catService.addCategoria(this.categoria).subscribe(res =>{
        })
      }else{
        this.catService.updateCategoria(this.categoria).subscribe(res =>{
        })
      }
        this.formCategoria.reset();
        this.rot.navigate(['categorias']);
    }

  cargarDatos(categoria2: Categoria){
    this.insertar = true;
    this.mostrarLista = false;
    console.log(this.formCategoria);
    console.log(this.categoria);
    this.formCategoria.patchValue({
      CategoryName: categoria2.CategoryName,
      Description: categoria2.Description  
    });
    console.log(this.formCategoria);
    console.log(this.categoria);
  }

    mostrarCategorias(){
      this.catService.mostrarCategorias().subscribe(res => {
        this.listCategories = res;
      })
    }

    borrar(id: number){
      this.catService.borrarCategorias(id).subscribe(res =>{
        this.listCategories = res;
      })
    }
    
  }

