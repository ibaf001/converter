
var force = { 
  Dynes: 0.00001,
  Newtons: 1,
  Meganewtons: 1000000,
  Kilonewtons: 1000,
  Kips: 4448.222,
  Poundals: 0.138255,
  Sthène: 1000

}

function convert_force(n,unit1,unit2){
  if(unit1 != "Newtons" && unit2 == "Newtons"){

    return force[unit1] * n;
  }
  else if(unit1 == "Newtons" && unit2 != "Newtons"){

     return (1/force[unit2]) * n;
  }
  else if(unit1 != "Newtons" && unit2 != "Newtons" && unit1 != unit2){
     var m = force[unit1] * n;
     return (1/force[unit2]) * m;
  }
  else{
    return n;
  }
}
