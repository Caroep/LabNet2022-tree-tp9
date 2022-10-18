import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  constructor(private readonly fb: FormBuilder, private catService: CategoriasService,private rot: Router) { 
    this.categoria = {} as Categoria;
  }

  ngOnInit(): void {
    
  }

  
  }
