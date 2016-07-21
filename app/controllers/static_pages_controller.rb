class StaticPagesController < ApplicationController
  def home
  end
  
  def temp
    @text = 'Temperature'
    @units = ['Celsius','Fahrenheit','Kelvin','Rankine','Reaumure']
  end

  def lengths
    @text = 'Length'
    @units = ['Meter','Kilometer','Decimeter','Centimeter','Micrometer','Inch','Foot','Yard','Mile']
  end
  
  def time
    @text = 'Time'
    @units = ['Seconds','Minutes','Hours','Days','Weeks','Years']
  end

  def volume
    @text = 'Volume'
    @units = ['Liters','Barrels','Gallons','Cups','Ounces']
  end

  def mass
    @text = 'Mass'
    @units = ['Grams','Kilograms','Tonnes','Pounds','Milligrams','Ounces']
  end

  def reset
    redirect_to request.referrer 
  end

end
