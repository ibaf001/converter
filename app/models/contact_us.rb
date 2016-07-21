class Contact_us  # < BasicActiveModel
  include ActiveModel::Model
  attr_accessor :name, :email, :message
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i
  validates :name , presence: true
  validates :message , presence: true
  validates :email, presence: true , length: {maximum: 255}, format: {with: VALID_EMAIL_REGEX}

  def initialize(name,email,msg)
    @name = name
    @email = email
    @message = msg
  end
  
end
