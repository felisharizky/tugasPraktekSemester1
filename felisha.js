var input = require('readline-sync');
var nilaiBilangan = input.question("masukan nilai= ");
var sisa_bagi = nilaiBilangan % 2;

if (isNaN(nilaiBilangan)) {
    console.log("Yang anda masukan bukan huruf, MASUKAN ANGKA!!");
}else{
    if (sisa_bagi == 0)
   {
    console.log(nilaiBilangan + " Adalah bilangan genap");
   }else {
    console.log(nilaiBilangan + " Adalah bilangan ganjil");
   }
}