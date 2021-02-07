class PeopleController < ApplicationController
  def index
    @people = Salesloft::Client.people['data'].map do |person|
      [{
        id: person['id'],
        name: person['first_name'],
        email: person['email_address'],
        job: person['title'],
      }]
    end
  end
end
