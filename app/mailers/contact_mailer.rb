class ContactMailer < ApplicationMailer
   def welcome_email
    @contact = params[:contact]
    @url = 'http://example.com/login'
    mail(to: 'coombs.charles@gmail.com', subject: 'Welcome to My Awesome Site')
  end


end
