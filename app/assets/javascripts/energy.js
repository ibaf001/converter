//    @units = ['Joule','Kilocalories','Kilojoules','Horsepower','Btu']


var energy = { 
  Joule: 1,
  Kilocalories: 4184,
  Kilojoules: 1000,
  Horsepower: 2684520,
  Btu: 1000,
  Ergs: 0.0000001
}

function convert_energy(n,unit1,unit2){
  if(unit1 != "Joule" && unit2 == "Joule"){

    return energy[unit1] * n;
  }
  else if(unit1 == "Joule" && unit2 != "Joule"){

     return (1/energy[unit2]) * n;
  }
  else if(unit1 != "Joule" && unit2 != "Joule" && unit1 != unit2){
     var m = enery[unit1] * n;
     return (1/energy[unit2]) * m;
  }
  else{
    return n;
  }
}
