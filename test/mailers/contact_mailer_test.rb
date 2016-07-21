require 'test_helper'

class ContactMailerTest < ActionMailer::TestCase

  test "message sent" do
    mail = ContactMailer.contact('james','linda@test.com','nzambe malamu')
    assert_equal ["ibobafumba@gmail.com"], mail.to
  end

end
