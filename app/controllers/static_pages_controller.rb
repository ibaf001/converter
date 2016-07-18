class StaticPagesController < ApplicationController
  def home
  end
  
  def temp
    @text = 'Temperature'
    @units = ['celsius','fahrenheit','kelvin']
  end

  def lengths
    @text = 'Length'
    @units = ['meters','decimeters','centimeters','inches']
  end
  
  def time
    @text = 'Time'
    @units = ['secondes','minutes','hours','days']
  end

  def volume
    @text = 'Volume'
    @units = ['liters','gallons','cubic feet','microliters']
  end

  def reset
    redirect_to request.referrer 
  end

end
