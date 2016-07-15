Rails.application.routes.draw do
  root 'static_pages#home'

  get 'temp' =>'static_pages#temp'
  post 'temp_convert' => 'static_pages#temp_convert'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
