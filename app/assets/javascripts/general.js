
function convert_left(){
    var v1 = document.getElementById("r1").value == ""? 0 : document.getElementById("r1").value;
    v1 = parseInt(v1);
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
    else if(a =='meters' && b == 'decimeters'){
       res =meter_to_decimeter(v1);
    }
    else{
      res = v1;
    }

    document.getElementById("r2").value = res;
}

function convert_rigth(){
    var v1 = document.getElementById("r2").value == ""? 0 : document.getElementById("r2").value;
    v1 = parseInt(v1);
    var a = document.getElementById("s1").value;
    var b = document.getElementById("s2").value;
    var res = 0;
    if(b =='celsius' && a == 'fahrenheit'){
       res = celsius_to_fahrenheit(v1);
    }else if (b =='fahrenheit' && a == 'celsius'){
      res = fahrenheit_to_celsius(v1);
    }
    else if (b =='celsius' && a == 'kelvin'){
      res = celsius_to_kelvin(v1);
    }
    else if (b =='kelvin' && a == 'celsius'){
      res = kelvin_to_celsius(v1);
    }
    else{
      res = v1;
    }

    document.getElementById("r1").value = res;
}