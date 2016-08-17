$("document").ready(function() {
  $("#r1").keyup(convert_left);
  $("#r2").keyup(convert_rigth);
  $("#s1").change(convert);
  $("#s2").change(convert);
  $("#precis").change(convert);
});

//var precision =parseInt($("#precis").val());

function convert_left(){
    var res = 0;
    var precision =parseInt($("#precis").val());
    //var precision = document.getElementById("precis").value);
    var v1 = $("#r1").val();//document.getElementById("r1").value;
    if(v1 == ""){
      res = "";
    }
    else{
      v1 = Number(v1);
      var unit1 = transform_unit($("#s1").val());//transform_unit(document.getElementById("s1").value);
      var unit2 = transform_unit($("#s2").val());//transform_unit(document.getElementById("s2").value);
      res = convert_units(v1,unit1,unit2);
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    $("#r2").val(res) ;//document.getElementById("r2").value = res;

}



function convert_rigth(){
    var res = 0;
    var precision =parseInt($("#precis").val());
    //var precision = parseInt(document.getElementById("precis").value);
    var v1 = $("#r2").val(); //document.getElementById("r2").value;
    if(v1 == ""){
      res = "";
    }
    else{

      v1 = Number(v1);
      var unit1 = transform_unit($("#s2").val());//transform_unit(document.getElementById("s2").value);
      var unit2 = transform_unit($("#s1").val());//transform_unit(document.getElementById("s1").value);
      res = convert_units(v1,unit1,unit2);
   }
    if(!isNaN(res) && res % 1 != 0) res = res.toFixed(precision);
    $("#r1").val(res) ;//document.getElementById("r1").value = res;
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
  var ref = transform_unit($("#ref").val());//transform_unit(document.getElementById("ref").value);
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

function reverse_unit(){
  var a = $("#s1").val();//document.getElementById("s1").value;
  var b = $("#s2").val(); //document.getElementById("s2").value;
 // document.getElementById("s1").value = b;
  //document.getElementById("s2").value = a;
  $("#s1").val(b);
  $("#s2").val(a);
  convert();
}


  










