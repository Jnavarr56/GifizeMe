Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #devise_for :users, :skip => [:passwords, :registrations], controllers: { 
    
    #omniauth_callbacks: 'users/omniauth_callbacks',
    
  #}

  devise_for :users, :skip => [:passwords, :registrations], controllers: { 
    
    omniauth_callbacks: 'users/omniauth_callbacks',
    
  }

  devise_scope :user do
    
    unauthenticated do
      root :to => "sign_in#sign_in"

      get "*path" => "sign_in#sign_in"
    end

    authenticated do
      root :to => "logged_in#logged_in"

      get "/about" => "logged_in#logged_in"

      get "/acquire-user-data/:id" => "logged_in#acquire_user_data"

      post "/upload" => "logged_in#upload"

      delete "/delete" => "logged_in#delete"
      
    end
    
  end



end
