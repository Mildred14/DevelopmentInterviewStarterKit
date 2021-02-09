require 'application_system_test_case'

class PeopleTest < ApplicationSystemTestCase
  test 'feature of salesloft success' do
    stub_request(:get, 'https://api.salesloft.com/v2/people.json').
      to_return(
        body: JSON.generate(
          { data: [
            { id: '1', first_name: 'John Doe', email_address: 'johndoe@example.com', title: 'Software Enginner' },
            { id: '2', first_name: 'Richard Doe', email_address: 'johndoerr@example.com', title: 'Computer Sciences' },
            { id: '3', first_name: 'Nataly Silva', email_address: 'johndoe@example.com', title: 'Communications and Journalism' },
          ]}))
    visit root_path

    #----------------------------------------------------
    # Display People list of SalesLoft
    #----------------------------------------------------

    assert_content 'List of People'

    within '#people-list' do
      assert_content 'John Doe'
      assert_content 'johndoe@example.com'
    end

    #----------------------------------------------------
    # Display Frecuency Counter of Chars
    #----------------------------------------------------
    assert_content 'Frecuency count'

    click_button 'Generate counter'

    within '#frecuency-chars' do
      within '#e' do
        assert_content '9'
      end

      within '#h' do
        assert_no_text '1'
      end
    end

    #----------------------------------------------------
    # Display Posible Duplicated Emails
    #----------------------------------------------------
    assert_content 'Possible duplicated'

    click_button 'Generate duplicated'

    within '#duplicated-people' do
      assert_content 'johndoe@example.com'
      assert_content 'johndoerr@example.com'
    end
  end
end
