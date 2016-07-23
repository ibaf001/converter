
//    @units = ['Atmospheres','Bars','Pascals','Newtons/sq.meter']

var pressure = { 
  atmospheres: 101325,
  bars: 100000,
  pascals: 1,
  torr: 133.322,
  inches_of_mercury: 3386.388,
  millimeters_of_mercury: 133.322
  //Newtons/sq.meter: 1

}

function convert_pressure(n,unit1,unit2){
  if(unit1 != "pascals" && unit2 == "pascals"){

    return pressure[unit1] * n;
  }
  else if(unit1 == "pascals" && unit2 != "pascals"){

     return (1/pressure[unit2]) * n;
  }
  else if(unit1 != "pascals" && unit2 != "pascals" && unit1 != unit2){
     var m = pressure[unit1] * n;
     return (1/pressure[unit2]) * m;
  }
  else{
    return n;
  }
}
