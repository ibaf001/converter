

var volume = { 
  Liters: 1,
  Barrels: 158.987294928,
  Gallons: 3.785411784,
  Cups: 0.2365882365,
  Ounces: 0.0295735295625
}

function convert_volume(n,unit1,unit2){
  if(unit1 != "Liters" && unit2 == "Liters"){

    return volume[unit1] * n;
  }
  else if(unit1 == "Liters" && unit2 != "Liters"){

     return (1 /volume[unit2]) * n;
  }
  else if(unit1 != "Liters" && unit2 != "Liters" && unit1 != unit2){
     var m = volume[unit1] * n;

     return (1 /volume[unit2]) * m;
  }
  else{
    return n;
  }
}

