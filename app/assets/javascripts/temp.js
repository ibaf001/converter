

var temp = { 
  Celsius: [function(n){return n + 273.15},function(n){return n - 273.15}],
  Kelvin: 1,
  Fahrenheit:[function(n){return (5/9)* (n + 459.67)},function(n){return (9/5)*(n - 459.67)}],
  Rankine: [function(n){return n * (5/9)},function(n){return n * (9/5)}],
  Reaumure:[function(n){return (5/4) *(n + 273.15)},function(n){return (4/5) * (n - 273.15)}]
}

function convert_temp(n,unit1,unit2){
  if(unit1 != "Kelvin" && unit2 == "Kelvin"){
    return temp[unit1][0](n);
  }
  else if(unit1 == "Kelvin" && unit2 != "Kelvin"){
     return temp[unit2][1](n);
  }
  else if(unit1 != "Kelvin" && unit2 != "Kelvin" && unit1 != unit2){
     var m = temp[unit1][0](n);
     return temp[unit2][1](m);
  }
  else{
    return n;
  }
}



