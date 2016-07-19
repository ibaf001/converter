class StaticPagesController < ApplicationController
  def home
  end
  
  def temp
    @text = 'Temperature'
    @units = ['Celsius','Fahrenheit','Kelvin','Rankine','Reamure']
  end

  def lengths
    @text = 'Length'
    @units = ['Meters','Decimeters','Centimeters','Inches']
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
