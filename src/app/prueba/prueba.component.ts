import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  arrayNumHijos :any[];
  arrayUsuariosPagos :any[];
  arrayUsuariosNoPagos :any[];
  arrayTipoSac :any[];
  arrayTipoEirl  :any[];
  displaySac = false;
  displayEirl = false;
  displaySon = false;
  displayPay = false;
  displayNotPay = false;
  array = [
{
  nombre: "Joaquin",
 numhijos:4,
empresa:"PAPOS EIRL",
pago: true,
},
{
  nombre: "Jose Gomez ",
numhijos: 2 ,
empresa:"Multiservicios  EIRL ",
pago: true
 },

{
  nombre: "Mariana",
numhijos:0,
empresa:"Koketas Shoes SAC ",
pago: false
 },
{
  nombre: "Laura",
numhijos:1,
empresa:"Koketas Shoes SAC ",
pago: false 
}]

  constructor() { }
  orderByTypeSac(){ 
    this.arrayTipoSac = this.array.filter(element => element.empresa === "Koketas Shoes SAC "
    );
    console.log(this.arrayTipoSac);
  this.displaySac = true
  this.displayEirl = false
  this.displayNotPay = false
  this.displayPay = false
  this.displaySon = false
}
orderByTypeEirl(){ 

  this.arrayTipoEirl =  this.array.filter(element => { 
       if((element.empresa.includes('PAPOS EIRL')) || (element.empresa.includes('Multiservicios  EIRL')) ){
         return element.empresa
        
        }
        })
        this.displaySac = false
        this.displayEirl = true
        this.displayNotPay = false
        this.displayPay = false
        this.displaySon = false
  
}
  sortBySon(){ 
    const ordenar =(a,b)=>  a.numhijos - b.numhijos
    console.log(ordenar);
    this.arrayNumHijos = this.array.sort(ordenar).reverse();
    
  this.displaySac = false
  this.displayEirl = false
  this.displayNotPay = false
  this.displayPay = false
  this.displaySon = true
  }
  userOrderByPayment(){ 
    
   this.arrayUsuariosPagos = this.array.filter(element => element.pago === true);
   this.displaySac = false
  this.displayEirl = false
  this.displayNotPay = false
  this.displayPay = true
  this.displaySon = false
  
  }
  usersNotPay(){ 
    
    this.arrayUsuariosNoPagos = this.array.filter(element => element.pago === false);
   console.log( this.arrayUsuariosNoPagos);
 this.displaySac = false
  this.displayEirl = false
  this.displayNotPay = true
  this.displayPay = false
  this.displaySon = false
   
   }


  ngOnInit(): void {
  }

}
