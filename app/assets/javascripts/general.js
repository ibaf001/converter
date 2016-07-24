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
    if (s == "Temperature")return (q[s][unit1])[0](n);
    return (q[s][unit1]) * n;
  }
  else if(unit1 == ref && unit2 != ref){
     if (s == "Temperature")return (q[s][unit2])[1](n);
     return (1/(q[s][unit2])) * n;
  }
  else if(unit1 != ref && unit2 != ref && unit1 != unit2){
     var m = 0;
     if (s == "Temperature"){
       m = (q[s][unit1])[0](n);
       return (q[s][unit2])[1](m)
     }
     m = (q[s][unit1]) * n;
     return (1/(q[s][unit2])) * m;
  }
  else{
    return n;
  }
}

/*
function convert_temp(n,unit1,unit2){
  if(unit1 != "kelvin" && unit2 == "kelvin"){
    return temp[unit1][0](n);
  }
  else if(unit1 == "kelvin" && unit2 != "kelvin"){
     return temp[unit2][1](n);
  }
  else if(unit1 != "kelvin" && unit2 != "kelvin" && unit1 != unit2){
     var m = temp[unit1][0](n);
     return temp[unit2][1](m);
  }
  else{
    return n;
  }
}
*/
function convert_units(v1,unit1,unit2){
  var res = 0;
  var dimension = (document.getElementById("unit").innerHTML);
  var ref = transform_unit(document.getElementById("ref").value);
  return convert_all(v1,unit1,unit2,ref,dimension);
}



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
  










