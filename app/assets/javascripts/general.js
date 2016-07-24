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


function convert_all(n,unit1,unit2,ref,s){
  if(unit1 != ref && unit2 == ref){

    return (q[s][unit1]) * n;
  }
  else if(unit1 == ref && unit2 != ref){

     return (1/(q[s][unit2])) * n;
  }
  else if(unit1 != ref && unit2 != ref && unit1 != unit2){
     var m = (q[s][unit1]) * n;
     return (1/(q[s][unit2])) * m;
  }
  else{
    return n;
  }
}
function convert_units(v1,unit1,unit2){
  var res = 0;
  var dimension = (document.getElementById("unit").innerHTML);
  var ref = transform_unit(document.getElementById("ref").value);
  return convert_all(v1,unit1,unit2,ref,dimension);
}

/*
function convert_units(v1,unit1,unit2){
  var res = 0;
  var unit = (document.getElementById("unit").innerHTML).toLowerCase();
  if (unit == "length"){
    res = convert_len(v1,unit1,unit2);
  }
  else if(unit == "temperature"){
    res = convert_temp(v1,unit1,unit2);
  }
  else if(unit == "time"){
    res = convert_time(v1,unit1,unit2);
  }
  else if(unit == "volume"){
    res = convert_volume(v1,unit1,unit2);
  }
  else if(unit == "mass"){
    res = convert_mass(v1,unit1,unit2);
  }
  else if(unit == "pressure"){
    res = convert_pressure(v1,unit1,unit2);
  }
  else if(unit == "energy"){
    res = convert_energy(v1,unit1,unit2);
  }
  else if(unit == "force"){
    res = convert_force(v1,unit1,unit2);
  }
  else if(unit == "area"){
    res = convert_area(v1,unit1,unit2);
  }
  else{
   res = 0;
  }
  return res;
}

*/

function convert(){
  convert_left();
}




function transform(unite){
  var a = unite.split("/");
  return a.join("$");
}
function transform_unit(unite){
  var a = unite.split(" ");
  var result = [ ];
  var n = a.length;
  for (var i = 0; i < n; i++){
    result.push(transform(a[i]));
  }
  return result.join("_");
}
  










