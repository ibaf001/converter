//    @units = ['Joule','Kilocalories','Kilojoules','Horsepower','Btu']


var energy = { 
  joule: 1,
  kilocalories: 4184,
  kilojoules: 1000,
  horsepower: 2684520,
  btu: 1000,
  ergs: 0.0000001
}

function convert_energy(n,unit1,unit2){
  if(unit1 != "joule" && unit2 == "joule"){

    return energy[unit1] * n;
  }
  else if(unit1 == "joule" && unit2 != "joule"){

     return (1/energy[unit2]) * n;
  }
  else if(unit1 != "joule" && unit2 != "joule" && unit1 != unit2){
     var m = enery[unit1] * n;
     return (1/energy[unit2]) * m;
  }
  else{
    return n;
  }
}
