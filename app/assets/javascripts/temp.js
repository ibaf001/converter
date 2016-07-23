

var temp = { 
  celsius: [function(n){return n + 273.15},function(n){return n - 273.15}],
  kelvin: 1,
  fahrenheit:[function(n){return (5/9) * (n + 459.67)},function(n){return ((9/5) * n) - 459.67}],
  rankine: [function(n){return n * (5/9)},function(n){return n * (9/5)}],
  reaumure:[function(n){return ((5/4) * n) + 273.15 },function(n){return (4/5) * (n - 273.15)}]
}

function convert_temp(n,unit1,unit2){
  if(unit1 != "kelvin" && unit2 == "kelvin"){
    return temp[unit1][0](n);
  }
  else if(unit1 == "kelvin" && unit2 != "kelvin"){
     return temp[unit2][1](n);
  }
  else if(unit1 != "kelvin" && unit2 != "kelvin" && unit1 != unit2){
     var m = temp[unit1][0](n);
     return temp[unit2][1](m);
  }
  else{
    return n;
  }
}



