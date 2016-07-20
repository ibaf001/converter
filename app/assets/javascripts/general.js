function convert_left(){
    var res = 0;
    var precision =parseInt(document.getElementById("precis").value);
    var v1 = document.getElementById("r1").value;
    if(v1 == ""){
      res = "";
    }
    else{
      v1 = parseInt(v1);
      var unit1 = document.getElementById("s1").value;
      var unit2 = document.getElementById("s2").value;
      var unit = document.getElementById("unit").innerHTML;
      if (unit == "Length"){
        res = convert_len(v1,unit1,unit2);
      }
      else{
        res = 0;
      }
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    document.getElementById("r2").value = res;
}



function convert_rigth(){
    var res = 0;
    var precision =parseInt(document.getElementById("precis").value);
    var v1 = document.getElementById("r2").value;
    if(v1 == ""){
      res = "";
    }
    else{

      v1 = parseInt(v1);
      var unit1 = document.getElementById("s2").value;
      var unit2 = document.getElementById("s1").value;
      var unit = document.getElementById("unit").innerHTML;
      if (unit == "Length"){
        res = convert_len(v1,unit1,unit2);
      }
      else{
        res = 0;
      }
      
      
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    document.getElementById("r1").value = res;
}



function convert(){
  convert_left();
}






/*
function convert_left(){
    var res = 0;
    var precision =parseInt(document.getElementById("precis").value);
    var v1 = document.getElementById("r1").value;
    if(v1 == ""){
      res = "";
    }
    else{

      v1 = parseInt(v1);
      var a = document.getElementById("s1").value;
      var b = document.getElementById("s2").value;
      
      if(a =='Celsius' && b == 'Fahrenheit'){
        res = celsius_to_fahrenheit(v1);
      }
      else if (a =='Fahrenheit' && b == 'Celsius'){
        res = fahrenheit_to_celsius(v1);
      }
      else if (a =='Celsius' && b == 'Kelvin'){
        res = celsius_to_kelvin(v1);
      }
      else if (a =='Kelvin' && b == 'Celsius'){
        res = kelvin_to_celsius(v1);
      }
      else if (a == 'Kelvin' && b == 'Fahrenheit'){
        res = kelvin_to_fahrenheit(v1);
      }
      else if (a == 'Fahrenheit' && b == 'Kelvin'){
        res = fahrenheit_to_kelvin(v1);
      }
      else if (a == 'Celsius' && b == 'Rankine'){
        res = celsius_to_rankine(v1);
      }
      else{
        res = v1;
      }
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    document.getElementById("r2").value = res;
}

function convert_rigth(){
    var res = 0;
    var precision =parseInt(document.getElementById("precis").value);
    var v1 = document.getElementById("r2").value;
    if(v1 == ""){
      res = "";
    }
    else{

      v1 = parseInt(v1);
      var a = document.getElementById("s1").value;
      var b = document.getElementById("s2").value;
      
      if(b =='Celsius' && a == 'Fahrenheit'){
        res = celsius_to_fahrenheit(v1);
      }
      else if (b =='Fahrenheit' && a == 'Celsius'){
        res = fahrenheit_to_celsius(v1);
      }
      else if (b =='Celsius' && a == 'Kelvin'){
        res = celsius_to_kelvin(v1);
      }
      else if (b =='Kelvin' && a == 'Celsius'){
        res = kelvin_to_celsius(v1);
      }
      else if (b == 'Kelvin' && a == 'Fahrenheit'){
        res = kelvin_to_fahrenheit(v1);
      }
      else if (b == 'Fahrenheit' && a == 'Kelvin'){
        res = fahrenheit_to_kelvin(v1);
      }
      else{
        res = v1;
      }
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    document.getElementById("r1").value = res;
}



function convert(){
  convert_left();
}



*/



