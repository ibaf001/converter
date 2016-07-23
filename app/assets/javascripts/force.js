
var force = { 
  dynes: 0.00001,
  newtons: 1,
  meganewtons: 1000000,
  kilonewtons: 1000,
  kips: 4448.222,
  poundals: 0.138255,
  sthène: 1000

}

function convert_force(n,unit1,unit2){
  if(unit1 != "newtons" && unit2 == "newtons"){

    return force[unit1] * n;
  }
  else if(unit1 == "newtons" && unit2 != "newtons"){

     return (1/force[unit2]) * n;
  }
  else if(unit1 != "newtons" && unit2 != "newtons" && unit1 != unit2){
     var m = force[unit1] * n;
     return (1/force[unit2]) * m;
  }
  else{
    return n;
  }
}
