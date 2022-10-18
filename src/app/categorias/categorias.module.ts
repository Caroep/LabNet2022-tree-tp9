import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriasComponent } from "./categorias.component";
import { FormularioModule } from "./formulario/formulario.module";


@NgModule({
    declarations: [CategoriasComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        FormularioModule
    ],
    exports: [
        CategoriasComponent,
    ],
    providers: [],
    bootstrap: []
})
export class CategoriasModule { }
