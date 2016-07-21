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

  def pressure
    @text = 'Pressure'
    @units = ['Atmospheres','Bars','Pascals','Torr']
  end
  
  def contact_us
    @text ="Contact us"
    @hide_contact_link = true
    if request.post?
      redirect_to root_path
    end
  end

  def reset
    redirect_to request.referrer 
  end

end
