//    @units = ['square meters','acres','ares','hectares','square yards','square feet']

var area = { 
  square_meters: 1,
  acres: 4046.8564224,
  ares: 100,
  hectares: 10000,
  square_yards:  0.83612736,
  square_feet: 0.09290304
}

function convert_area(n,unit1,unit2){
  if(unit1 != "square_meters" && unit2 == "square_meters"){

    return area[unit1] * n;
  }
  else if(unit1 == "square_meters" && unit2 != "square_meters"){

     return (1/area[unit2]) * n;
  }
  else if(unit1 != "square_meters" && unit2 != "square_meters" && unit1 != unit2){
     var m = area[unit1] * n;
     return (1/area[unit2]) * m;
  }
  else{
    return n;
  }
}
