class ApplicationController < ActionController::Base
  def authenticate_user!
    user = authenticate_with_http_token do |token|
      body = JWT.decode(token, Rails.application.credentials.secret_key_base)[0]
      User.find(body["user_id"])
    end

    render json: { error: "Invalid token" }, status: :unauthorized unless user
  end
end
