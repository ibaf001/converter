
//    @units = ['Atmospheres','Bars','Pascals','Newtons/sq.meter']

var pressure = { 
  Atmospheres: 101325,
  Bars: 100000,
  Pascals: 1,
  Torr: 133.322
  //Newtons/sq.meter: 1

}

function convert_pressure(n,unit1,unit2){
  if(unit1 != "Pascals" && unit2 == "Pascals"){

    return pressure[unit1] * n;
  }
  else if(unit1 == "Pascals" && unit2 != "Pascals"){

     return (1/pressure[unit2]) * n;
  }
  else if(unit1 != "Pascals" && unit2 != "Pascals" && unit1 != unit2){
     var m = pressure[unit1] * n;
     return (1/pressure[unit2]) * m;
  }
  else{
    return n;
  }
}
