class ApplicationMailer < ActionMailer::Base
  default from: 'coombs.charles@example.com'
  layout 'mailer'

  def headers
    {
    :subject => 'Contact Inquiry',
    :to => 'coombs.charles@gmail.com',
    :from => "coombs.charles2@gmail.com"
    }
  end
end
