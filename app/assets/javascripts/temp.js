
function convert_left(){
    var v1 = parseInt(document.getElementById("r1").value);
    var a = document.getElementById("s1").value;
    var b = document.getElementById("s2").value;
    var res = 0;
    if(a =='celsius' && b == 'fahrenheit'){
       res = celsius_to_fahrenheit(v1);
    }else if (a =='fahrenheit' && b == 'celsius'){
      res = fahrenheit_to_celsius(v1);
    }
    else if (a =='celsius' && b == 'kelvin'){
      res = celsius_to_kelvin(v1);
    }
    else if (a =='kelvin' && b == 'celsius'){
      res = kelvin_to_celsius(v1);
    }
    else{
      res = v1;
    }

    document.getElementById("r2").value = res;
}

function celsius_to_fahrenheit(num){
  return ((num * 9)/5) + 32;
}
function fahrenheit_to_celsius(num){
  return (num - 32)* 5/9;
}

function celsius_to_kelvin(num){
  return num + 273.15;
}

function kelvin_to_celsius(num){
  return num - 273.15;
}




