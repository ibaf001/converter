function convert_left(){
    var res = 0;
    var precision =parseInt(document.getElementById("precis").value);
    var v1 = document.getElementById("r1").value;
    if(v1 == ""){
      res = "";
    }
    else{
      v1 = Number(v1);
      var unit1 = transform_unit(document.getElementById("s1").value);
      var unit2 = transform_unit(document.getElementById("s2").value);
      res = convert_units(v1,unit1,unit2);
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    document.getElementById("r2").value = res;
}



function convert_rigth(){
    var res = 0;
    var precision =parseInt(document.getElementById("precis").value);
    var v1 = document.getElementById("r2").value;
    if(v1 == ""){
      res = "";
    }
    else{

      v1 = Number(v1);
      var unit1 = transform_unit(document.getElementById("s2").value);
      var unit2 = transform_unit(document.getElementById("s1").value);
      res = convert_units(v1,unit1,unit2);
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    document.getElementById("r1").value = res;
}


function convert_units(v1,unit1,unit2){
  var res = 0;
  var unit = document.getElementById("unit").innerHTML;
  if (unit == "Length"){
    res = convert_len(v1,unit1,unit2);
  }
  else if(unit == "Temperature"){
    res = convert_temp(v1,unit1,unit2);
  }
  else if(unit == "Time"){
    res = convert_time(v1,unit1,unit2);
  }
  else if(unit == "Volume"){
    res = convert_volume(v1,unit1,unit2);
  }
  else if(unit == "Mass"){
    res = convert_mass(v1,unit1,unit2);
  }
  else if(unit == "Pressure"){
    res = convert_pressure(v1,unit1,unit2);
  }
  else if(unit == "Energy"){
    res = convert_energy(v1,unit1,unit2);
  }
  else if(unit == "Force"){
    res = convert_force(v1,unit1,unit2);
  }
  else{
   res = 0;
  }
  return res;
}


function convert(){
  convert_left();
}

function transform_unit(unite){
  var a = unite.split(" ");
  return a.join("_");
}










