
//@units = ['Grams','Kilograms','Tonnes','Pounds','Milligrams','Ounces']
var mass = { 
  grams: 0.001,
  kilograms: 1,
  tonnes: 1000,
  pounds: 0.45359237,
  milligrams: 0.000001,
  ounces: 0.028349523125
}

function convert_mass(n,unit1,unit2){
  if(unit1 != "kilograms" && unit2 == "kilograms"){

    return mass[unit1] * n;
  }
  else if(unit1 == "kilograms" && unit2 != "kilograms"){

     return (1/mass[unit2]) * n;
  }
  else if(unit1 != "kilograms" && unit2 != "kilograms" && unit1 != unit2){
     var m = mass[unit1] * n;
     return (1/mass[unit2]) * m;
  }
  else{
    return n;
  }
}
