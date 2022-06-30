import { Component, OnInit } from '@angular/core';

import reciclablesjson from 'src/assets/json/reciclables2.json';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.scss']
})
export class GuiasComponent implements OnInit {

  reciclado: any = reciclablesjson;

  reciclables = {
    "organicos": [
      {"residuosAlimenticios":[
        {"nombre":"Residuos Alimenticios","descripcion":"Cualquier residuo alimenticio"}
      ]
      ,
      "papelYcarton":[
        {
        "nombre":"Papel y Carton",
        "descripcion":"Revistas, periodico, libros, embalaje, papel de oficina,cajas,carton corrugado,otros"}
        ]
      ,
        "textil":[{
          "nombre":" Textiles ","descripcion":"algodon,cortinas,nailon, ropa usada,retazos de tela"}
        ]
      ,
        "otrosOrganicos":[{
          "nombre":"Otros organicos", "descripcion":"madera,cueros,residuos de jardineria"}
        ]
      }
    ],
    "noOrganicos": [
      {"plastico":[
        {"nombre":"Plastico*","descripcion":"PET, HDPE, LDPE, PP, entre otros"}
      ]
      ,
      "vidrio":[
        {
        "nombre":"Vidrio",
        "descripcion":"vidrios claros, ambar y verdes"}
        ]
      ,
        "metales":[{
          "nombre":"Metales","descripcion":"Latas de los alimentos procesados y bebdidas,materiales ferosos y no ferosos"}
        ]
      ,
        "envasesTetraPak":[{
          "nombre":"Envases tetra pak", "descripcion":"Envases de bebidas y alimentos procesados"}
        ]
      ,
        "Aluminio":[{
          "nombre":"Alumnio", "descripcion":"Latas de aluminio, otros tipos de aluminio"}
        ]
      ,
        "otrosInorganicos":[{
          "nombre":"Otros Inorganicos", "descripcion":"Loza y ceramica, materiales de construccion"}
        ]
      }
    ],
    "noReciclable": [
      {"ResiduoSanitarios":[
        {"nombre":"Residuos Sanitarios","descripcion":"Pañal desechable de niño y adulto, toallas sanitarias"}
      ]
      ,
      "residuosFino":[
        {
        "nombre":"Residuos fino",
        "descripcion":"Tierra de jardin, residuos finos que pasan el tamiz"}
        ]
      ,
        "residuosElectronicos":[{
          "nombre":"Residuos electronicos","descripcion":"Cualquier tipo de residuo electronico domestico"}
        ]
      ,
        "varios":[{
          "nombre":"varios", "descripcion":"Residuos que no se ajustan a las categorias anteriores"}
        ]
      }
    ],
  }

  reciclables_2 = {
    "organicos": [
      {
        "nombre":"Residuos Alimenticios","descripcion":"Cualquier residuo alimenticio"
      }
      ,
      {
        "nombre":"Papel y Carton",
        "descripcion":"Revistas,periodico,libros o papel,materiales de embalaje,cajas,carton corrugado,otros"
      }
      ,
      {
         "nombre":" Textiles ","descripcion":"algodon,cortinas,nailon, ropa usada,retazos de tela"
      }
      ,{
        "nombre":"Otros organicos", "descripcion":"madera,cueros,residuos de jardineria"
      }
    ],
    "noOrganicos": [
      {
        "nombre":"Plastico*","descripcion":"PET, HDPE, LDPE, PP, entre otros"
      },
      {
      "nombre":"Vidrio",
        "descripcion":"vidrios claros, ambar y verdes"
      },{
          "nombre":"Metales","descripcion":"Latas de los alimentos procesados y bebdidas,materiales ferosos y no ferosos"
      },{

          "nombre":"Envases tetra pak", "descripcion":"Envases de bebidas y alimentos procesados"
      },{

          "nombre":"Alumnio", "descripcion":"Latas de aluminio, otros tipos de aluminio"
      },{
          "nombre":"Otros Inorganicos", "descripcion":"Loza y ceramica, materiales de construccion"
      }
    ],
    "noReciclable": [
      {
        "nombre":"Residuos Sanitarios","descripcion":"Pañal desechable de niño y adulto, toallas sanitarias"
      },
      {
        "nombre":"Residuos fino",
        "descripcion":"Tierra de jardin, residuos finos que pasan el tamiz"

      },{
          "nombre":"Residuos electronicos","descripcion":"Cualquier tipo de residuo electronico domestico"
      },
      {
          "nombre":"varios", "descripcion":"Residuos que no se ajustan a las categorias anteriores"
      }
    ],
  }




  constructor() { 

  }

  ngOnInit(): void {
  }

}
