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
    @visite = 1
    if request.post?
      @visite = @visite + 1
      @contact = Contact_us.new(params["/contact_us"]["name"],params["/contact_us"]["email"],params["/contact_us"]["message"])
      
      if @contact.valid?
        ContactMailer.contact(@contact.name,@contact.email,@contact.message).deliver_now
        flash[:success] = "Message sent successfully"
        redirect_to root_path
      else
        render 'contact_us'
      end
    end
  end

  def reset
    redirect_to request.referrer 
  end
=begin
  private
  
    def contact_param
      params.require(:contact_us).permit(:name, :email, :message)
    end
=end

end
