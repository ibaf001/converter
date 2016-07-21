Rails.application.routes.draw do
  root 'static_pages#lengths'

  get 'temp' =>'static_pages#temp'
  get 'length' =>'static_pages#lengths'
  get 'time' =>'static_pages#time'
  get 'volume' =>'static_pages#volume'
  get 'reset' =>'static_pages#reset'
  get 'mass' =>'static_pages#mass'
  get 'pressure' =>'static_pages#pressure'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
