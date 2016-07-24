class StaticPagesController < ApplicationController
  def home
  end
  
  def temp
    @text = 'Temperature'
    @ref = 'kelvin'
    @units = ['celsius','fahrenheit','kelvin','rankine','reaumure']
  end

  def lengths
    @text = 'Length'
    @ref = 'meter'
    @units = ['meter','kilometer','decimeter','centimeter','micrometer','inch','foot','yard','mile']
  end
  
  def time
    @text = 'Time'
    @ref = 'seconds'
    @units = ['seconds','minutes','hours','days','weeks','years','decades']
  end

  def volume
    @text = 'Volume'
    @ref = 'liters'
    @units = ['liters','barrels','gallons','cups','ounces']
  end

  def mass
    @text = 'Mass'
    @ref = 'kilograms'
    @units = ['grams','kilograms','tonnes','pounds','milligrams','ounces']
  end

  def pressure
    @text = 'Pressure'
    @ref = 'pascals'
    @units = ['atmospheres','bars','pascals','torr','inches of mercury','millimeters of mercury']
  end

  def energy
    @text = 'Energy'
    @ref = 'joule'
    @units = ['joule','kilocalories','kilojoules','horsepower','btu','ergs']
  end
  
  def force
    @text = 'Force'
    @ref = 'newtons'
    @units = ['dynes','newtons','meganewtons','kilonewtons','kips','poundals','sthène']
  end

  def area
    @text = 'Area'
    @ref = 'square meters'
    @units = ['square meters','acres','ares','hectares','square yards','square feet']
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
