Rails.application.routes.draw do
  root 'static_pages#lengths'

  get 'area' =>'static_pages#area'
  get 'density' =>'static_pages#density'
  get 'temp' =>'static_pages#temp'
  get 'length' =>'static_pages#lengths'
  get 'force' =>'static_pages#force'
  get 'speed' =>'static_pages#speed'
  get 'time' =>'static_pages#time'
  get 'volume' =>'static_pages#volume'
  get 'reset' =>'static_pages#reset'
  get 'mass' =>'static_pages#mass'
  get 'energy' =>'static_pages#energy'
  get 'pressure' =>'static_pages#pressure'
  get 'contact_us' =>'static_pages#contact_us'
  post 'contact_us' =>'static_pages#contact_us'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
