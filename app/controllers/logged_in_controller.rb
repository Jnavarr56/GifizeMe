require 'securerandom'

class LoggedInController < ApplicationController
  def logged_in

     @user_code = "#{SecureRandom.base64}#{current_user.id}"  
    
  end

  def acquire_user_data

    state = {}

    if (current_user.id == session['user_id']) &&  (session['user_id'] == params[:id].to_i)

      state['user_data'] = current_user
      
      state['app_id'] = ENV['FB_APP_ID']

      if current_user.gifs.exists?

      #render :json =>
        
        puts 'hi'

      end

    end

    render :json => state

  end


  def create_gif

  end

end
