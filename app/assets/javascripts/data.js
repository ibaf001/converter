var q ={
  Length: {
    foot: 0.3048,
    mile: 1609.34,
    yard: 0.9144,
    meter: 1,
    centimeter: 0.01,
    inch: 0.0254,
    kilometer: 1000,
    decimeter: 0.1,
    centimer: 0.01,
    micrometer: 0.000001
  },
  Mass: { 
    grams: 0.001,
    kilograms: 1,
    tonnes: 1000,
    pounds: 0.45359237,
    milligrams: 0.000001,
    ounces: 0.028349523125
  },

  Force: { 
    dynes: 0.00001,
    newtons: 1,
    meganewtons: 1000000,
    kilonewtons: 1000,
    kips: 4448.222,
    poundals: 0.138255,
    sthène: 1000

  },
  Area: { 
    square_meters: 1,
    acres: 4046.8564224,
    ares: 100,
    hectares: 10000,
    square_yards:  0.83612736,
    square_feet: 0.09290304
  },
  Energy: { 
    joule: 1,
    kilocalories: 4184,
    kilojoules: 1000,
    horsepower: 2684520,
    btu: 1000,
    ergs: 0.0000001
  },
  Pressure: { 
    atmospheres: 101325,
    bars: 100000,
    pascals: 1,
    torr: 133.322,
    inches_of_mercury: 3386.388,
    millimeters_of_mercury: 133.322
  },
  Volume: { 
    liters: 1,
    barrels: 158.987294928,
    gallons: 3.785411784,
    cups: 0.2365882365,
    ounces: 0.0295735295625
  },
  Time: { 
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    years: 31536000,
    decades: 315360000
  },

  Temperature: { 
    celsius: [function(n){return n + 273.15},function(n){return n - 273.15}],
    kelvin: 1,
    fahrenheit:[function(n){return (5/9) * (n + 459.67)},function(n){return ((9/5) * n) - 459.67}],
    rankine: [function(n){return n * (5/9)},function(n){return n * (9/5)}],
    reaumure:[function(n){return ((5/4) * n) + 273.15 },function(n){return (4/5) * (n - 273.15)}]
  }


}







