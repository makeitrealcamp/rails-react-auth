class SessionsController < ApplicationController
  skip_forgery_protection

  def create
    user = User.where(email: params[:email]).take
    if user && user.authenticate(params[:password])
      payload = { user_id: 1 }
      jwt = JWT.encode(payload, Rails.application.credentials.secret_key_base)
      render json: { jwt: jwt }
    else
      render json: { error: "Invalid credentials" }, status: :unauthorized
    end
  end
end
