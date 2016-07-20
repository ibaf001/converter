require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  
  test "should get temp" do
    get temp_url
    assert_response :success
  end


end
