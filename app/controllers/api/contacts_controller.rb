class Api::ContactsController < ApplicationController

  def create
    @contact = Contact.new(contact_params)
    # if @contact.deliver
    #   render json: {message: `Thank you for your Email, #{name.capitalize}. I will get back to you shortly!`}
    # else
    #   render json: {message: 'Error occured. Please try again!'}
    # end
    if @contact.save 
      ContactMailer.with(contact: @contact).welcome_email.deliver_now
      render json: {message: "Thank you for your Email, #{@contact.name}. I will get back to you shortly!"}
    end

  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
