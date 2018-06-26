class UsersController < ApplicationController
  skip_forgery_protection

  before_action :authenticate_user!, only: [:index]

  def index
    render json: User.all.to_json(only: [:email, :created_at])
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user.to_json
    else
      render json: { errors: user.errors.to_json }, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end
