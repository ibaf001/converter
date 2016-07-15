class StaticPagesController < ApplicationController
  def home
  end
  
  def temp
    @units = ['celsius','fahrenheit','kelvin']
  end

  def temp_convert
  end
end
