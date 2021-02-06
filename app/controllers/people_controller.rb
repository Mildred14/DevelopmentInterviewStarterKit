class PeopleController < ApplicationController
  def index
    @people = Salesloft::Client.people
  end
end
