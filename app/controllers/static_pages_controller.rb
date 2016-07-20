class StaticPagesController < ApplicationController
  def home
  end
  
  def temp
    @text = 'Temperature'
    @units = ['Celsius','Fahrenheit','Kelvin','Rankine','Reaumure']
  end

  def lengths
    @text = 'Length'
    @units = ['Kilometer','Meter','Decimeter','Centimeter','Micrometer','Inch','Foot','Yard','Mile']
  end
  
  def time
    @text = 'Time'
    @units = ['Secondes','Minutes','Hours','Days']
  end

  def volume
    @text = 'Volume'
    @units = ['Liters','Gallons','Cubic feet','Microliters']
  end

  def reset
    redirect_to request.referrer 
  end

end
