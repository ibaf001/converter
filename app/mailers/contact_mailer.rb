class ContactMailer < ApplicationMailer
  default from: "sender@example.com"

  def contact(name,email,message)
    @name = name
    #from: "olala@gmail.com"
    @message = message
    mail to: "ibobafumba@gmail.com", subject: "feedback", from: email
  end
end
