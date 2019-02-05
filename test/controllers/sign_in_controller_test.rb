require 'test_helper'

class SignInControllerTest < ActionDispatch::IntegrationTest
  test "should get sign_in" do
    get sign_in_sign_in_url
    assert_response :success
  end

end
