
function celsius_to_fahrenheit(t){
  return ((t * 9)/5) + 32;
}
function fahrenheit_to_celsius(t){
  return (t - 32)* 5/9;
}

function celsius_to_kelvin(t){
  return t + 273.15;
}

function kelvin_to_celsius(t){
  return t - 273.15;
}

function kelvin_to_fahrenheit(t){
  return (t - 273.15) * (9/5) + 32;
}

function fahrenheit_to_kelvin(t){
  return (t - 32) *(5/9) + 273.15;
  
}

function rankine_to_celsius(t){
  
  return t * (5/9) - 273.15;
}

function celsius_to_rankine(t){
  return (t + 273.15) * (9/5);
}




