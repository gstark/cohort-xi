system "clear"

class Dog
  SPEED_CONSTANT = 4

  attr_accessor :name, :weight

  def initialize(name, weight)
    @name = name
    @weight = weight
  end

  # def name
  #   @name
  # end
  #
  # def name=(new_name)
  #   @name = new_name
  # end

  def run
    "#{@name} is running #{@weight * SPEED_CONSTANT}km/h"
  end
end

arwen = Dog.new("Arwen", 8)
puts arwen.run

finn_belle = Dog.new("Finn Belle", 3.6)
puts finn_belle.run

puts "#{arwen.name} is faster than #{finn_belle.name}"

puts "#{arwen.name} and #{finn_belle.name} got married. Introducing:\n\n"

arwen.name = "Arwen Belle"

puts arwen.name

finn_belle.weight -= 2

puts finn_belle.run
