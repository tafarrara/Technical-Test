
 function dumbWaysJos(bayar, diskon, kembalian){
   if(bayar >=50000){
     diskon = bayar*21.1/100;
     kembalian = bayar - diskon;
     if(diskon > 20000){
       diskon = 20000
       kembalian = bayar - diskon;
     }
        console.log("Uang yang harus di bayar : " + bayar + "\n" + "Diskon : " + diskon + "\n" + "Kembalian : " + kembalian); 
   }else{
        kembalian = bayar;
        console.log("Uang yang harus di bayar : " + bayar + "\n" + "Diskon : " + "maaf anda tidak dapat diskon" + "\n" + "Kembalian : " + kembalian); 
   }
 }

 (dumbWaysJos(150000)); 

 function dumbWaysMantap(bayar, diskon, kembalian){
   if(bayar >=80000){
     diskon = bayar*30/100;
     kembalian = bayar - diskon;
     if(diskon > 40000){
       diskon = 40000
       kembalian = bayar - diskon;
     }
        console.log("Uang yang harus di bayar : " + bayar + "\n" + "Diskon : " + diskon + "\n" + "Kembalian : " + kembalian); 
   }else{
        kembalian = bayar;
        console.log("Uang yang harus di bayar : " + bayar + "\n" + "Diskon : " + "maaf anda tidak dapat diskon" + "\n" + "Kembalian : " + kembalian); 
   }
 }
 
 (dumbWaysMantap(400000)); 
