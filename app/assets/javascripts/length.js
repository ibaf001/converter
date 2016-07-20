

var len = { 
  Foot: 0.3048,
  Mile: 1609.34,
  Yard: 0.9144,
  Centimeter: 0.01,
  Inch: 0.0254,
  Kilometer: 1000,
  Decimeter: 0.1,
  Centimer: 0.01,
  Micrometer: 0.000001
}

function convert_len(n,unit1,unit2){
  if(unit1 != "Meter" && unit2 == "Meter"){
    return len[unit1] * n;
  }
  else if(unit1 == "Meter" && unit2 != "Meter"){
     return (1/len[unit2]) * n;
  }
  else if(unit1 != "Meter" && unit2 != "Meter" && unit1 != unit2){
     var m = len[unit1] * n;
     return (1/len[unit2]) * m;
  }
  else{
    return n;
  }
}
