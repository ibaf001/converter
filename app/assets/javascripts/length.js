

var len = { 
  foot: 0.3048,
  mile: 1609.34,
  yard: 0.9144,
  centimeter: 0.01,
  inch: 0.0254,
  kilometer: 1000,
  decimeter: 0.1,
  centimer: 0.01,
  micrometer: 0.000001
}

function convert_len(n,unit1,unit2){
  if(unit1 != "meter" && unit2 == "meter"){

    return len[unit1] * n;
  }
  else if(unit1 == "meter" && unit2 != "meter"){

     return (1/len[unit2]) * n;
  }
  else if(unit1 != "meter" && unit2 != "meter" && unit1 != unit2){
     var m = len[unit1] * n;
     return (1/len[unit2]) * m;
  }
  else{
    return n;
  }
}
