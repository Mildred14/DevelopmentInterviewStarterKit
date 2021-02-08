require 'application_system_test_case'

class PeopleTest < ApplicationSystemTestCase
  test 'show people of salesloft' do
    assert_content "List of People"
  end

  def setup
    visit root_path
  end
end
