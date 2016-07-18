Rails.application.routes.draw do
  root 'static_pages#home'

  get 'temp' =>'static_pages#temp'
  get 'length' =>'static_pages#lengths'
  get 'time' =>'static_pages#time'
  get 'volume' =>'static_pages#volume'
  get 'reset' =>'static_pages#reset'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
