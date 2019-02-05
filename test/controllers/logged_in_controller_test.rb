require 'test_helper'

class LoggedInControllerTest < ActionDispatch::IntegrationTest
  test "should get logged_in" do
    get logged_in_logged_in_url
    assert_response :success
  end

end
