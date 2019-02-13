require 'securerandom'

class LoggedInController < ApplicationController

  before_action :upload_params, only: [:upload]

  def logged_in

     @user_code = "#{SecureRandom.base64}#{current_user.id}"  

  end

  def acquire_user_data

    state = {}

    if (current_user.id == session['user_id']) &&  (session['user_id'] == params[:id].to_i)

      state['user_data'] = current_user
      
      state['app_id'] = ENV['FB_APP_ID']

      if current_user.gifs.exists?

        state['user_gifs'] = { 'available_emojis' => [], 'gifs' => [] }

        AppEmoji.all.each do |e|

          user_gif = Gif.where({app_emoji_id: e.id, user_id: current_user.id })

          if user_gif.exists?

            puts user_gif.first.created_at

            puts Rails.application.routes.url_helpers.rails_blob_path(user_gif.first.gif_file,  only_path: true)
            puts Rails.application.routes.url_helpers.rails_blob_path(user_gif.first.gif_file,  only_path: true)
            puts Rails.application.routes.url_helpers.rails_blob_path(user_gif.first.gif_file, only_path: true)

            state['user_gifs']['gifs'].push({ 'gif_record' => user_gif.first, 'emoji' => e, 'blobURL' => user_gif.first.gif_file.service_url })
            
          else

            state['user_gifs']['available_emojis'].push(e)

          end

        end


      else

        state['user_gifs'] = { 'available_emojis' => AppEmoji.all }

      end

    end

    render :json => state

  end


  def upload

    test = Gif.new
    test.user_id = current_user.id
    emoji_id = upload_params.keys()[0].to_i
    test.app_emoji_id = emoji_id


    status = test.save!

    if status

      test.gif_file.attach(upload_params["#{emoji_id}"])

    end

    render :json => { 'status' =>  status && test.gif_file.attached? ? "SUCCESS" : "FAIL" }

  end

  private

  def upload_params

    params.permit!

  end

  

end
