module Salesloft
  module Client
    module_function

    API_URL = "https://api.salesloft.com/v2"

    def people
      url = URI("#{API_URL}/people.json")

      https = Net::HTTP.new(url.host, url.port)
      https.use_ssl = true

      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{ENV['SALESLOFT_APPLICATION_ID']}"

      response = https.request(request)
      JSON.parse(response.read_body)
    end
  end
end
