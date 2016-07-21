
//@units = ['Grams','Kilograms','Tonnes','Pounds','Milligrams','Ounces']
var mass = { 
  Grams: 0.001,
  Kilograms: 1,
  Tonnes: 1000,
  Pounds: 0.45359237,
  Milligrams: 0.000001,
  Ounces: 0.028349523125
}

function convert_mass(n,unit1,unit2){
  if(unit1 != "Kilograms" && unit2 == "Kilograms"){

    return mass[unit1] * n;
  }
  else if(unit1 == "Kilograms" && unit2 != "Kilograms"){

     return (1/mass[unit2]) * n;
  }
  else if(unit1 != "Kilograms" && unit2 != "Kilograms" && unit1 != unit2){
     var m = mass[unit1] * n;
     return (1/mass[unit2]) * m;
  }
  else{
    return n;
  }
}
