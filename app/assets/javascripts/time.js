

var time = { 
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  weeks: 604800,
  years: 31536000,
  decades: 315360000
}

function convert_time(n,unit1,unit2){
  if(unit1 != "seconds" && unit2 == "seconds"){
    return time[unit1] * n;
  }
  else if(unit1 == "seconds" && unit2 != "seconds"){
     return (1 /time[unit2]) * n;
  }
  else if(unit1 != "seconds" && unit2 != "seconds" && unit1 != unit2){
     var m = time[unit1] * n;
     return (1 /time[unit2]) * m;
  }
  else{
    return n;
  }
}
