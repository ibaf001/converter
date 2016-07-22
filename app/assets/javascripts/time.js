

var time = { 
  Seconds: 1,
  Minutes: 60,
  Hours: 3600,
  Days: 86400,
  Weeks: 604800,
  Years: 31536000,
  Decades: 315360000
}

function convert_time(n,unit1,unit2){
  if(unit1 != "Seconds" && unit2 == "Seconds"){
    return time[unit1] * n;
  }
  else if(unit1 == "Seconds" && unit2 != "Seconds"){
     return (1 /time[unit2]) * n;
  }
  else if(unit1 != "Seconds" && unit2 != "Seconds" && unit1 != unit2){
     var m = time[unit1] * n;
     return (1 /time[unit2]) * m;
  }
  else{
    return n;
  }
}
