class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: %i[facebook]

  has_many :gifs, dependent: :destroy
  has_many :app_emojis, through: :gifs


  # Method is called when user attempts to sign in via OAuth.
  # Locates user by email if exists. If does not, then creates
  # account for user skipping email confirmation.
  # Sets the signed_up_with_oauth field to true to indicate
  # that user has not set up a custom password.
  def self.from_omniauth(auth, signed_in_resource = nil)

    # Try to find user by uid (special id given to user by auth provider).
    user_by_uid = User.where(provider: auth.provider, uid: auth.uid).first

    # If cannot find user by uid, search for user by the email given by the auth provider.
    user = user_by_uid.present? ? user_by_uid : User.find_by_email(auth.info.email)

    # If the search for user by the email given by the auth provider does not yield anything then create the account using info derived from each provider.
    if !user.present?
      
      user = User.new # Create new class instance.
      
      if auth.provider == "facebook"

        user.email = auth.extra.raw_info.email        
        user.first_name = auth.extra.raw_info.first_name
        user.last_name = auth.extra.raw_info.last_name
        #user.dob = DateTime.strptime(auth.extra.raw_info.birthday, "%m/%d/%Y") # Get birthday as string from provider, convert to date object and give value to user's 'dob' field.

      end

      #user.signed_up_with_oauth = true # Set this field to true if user has created account with OAuth.

      #user.skip_confirmation! # Don't require email confirmation for this new user.

      user.password = Devise.friendly_token[0,20] # Generate password for new user.

      user.save # Save this new user to the database.
      
    end

    # Update column with auth provider, profile picture, and auth id.
    user.update_columns(provider: auth.provider, uid: auth.uid, img: auth.info.image) 
    
    user

  end

  
end