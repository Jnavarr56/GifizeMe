Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_for :users, controllers: { 
    
    omniauth_callbacks: 'users/omniauth_callbacks',
    
  }

  devise_scope :user do
    
    unauthenticated do
      root :to => "sign_in#sign_in"
    end

    authenticated do
      root :to => "logged_in#logged_in"

      get "*path" => "logged_in#logged_in"
    end
    
  end

end
