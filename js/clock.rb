class Clock < React::Component::Base
  param format: '%a, %e %b %Y %H:%M'
  before_mount do
    state.time! Time.now.strftime(params.format)
    every(1) { state.time! Time.now.strftime(params.format) }
  end

  def render
    state.time
  end
end
# Element['#clock'].render do
#   Clock format: 'The time is: %a, %e %b %Y %H:%M:%S %z'
# end

Element['#clock'].render do
  Clock format: 'Время: %H:%M:%S'
end
