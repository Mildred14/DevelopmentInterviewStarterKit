# frozen_string_literal: true

ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'webmock/minitest'

WebMock.disable_net_connect!(allow_localhost: true, allow: %r{chromedriver.storage.googleapis.com})

class ActiveSupport::TestCase
  fixtures :all
end
