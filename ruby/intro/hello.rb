# This is a comment.

puts(4 * 4) # This would evaluate to 8.

def square(n)
  puts "It's huge!" if n > 7
  n * n
end

puts square(7)
puts square(8)

def double(n)
  puts "#{n} is odd." unless n.even?
  n * -18
end

puts double(15)
puts double(6)

n = 0
# n += 1

puts n

n = 42

puts n

PHI = 1.61803399 # This is a constant

puts 3 * PHI

FIBB = [1, 1, 2, 3, 5, 8, 13, 21, 34].freeze

# Uncommon practice.
for n in FIBB
  puts n
end

n = ""

while n != "nnnn"
  puts "#{n} is not nnnn!"
  n += "n"
end

FIBB.each do |n|
  puts n
end

FIBB.each { |n| puts n }

FIBB.map { |n| double(n) }.each { |n| puts "#{n} is the double of #{n / 2}" }

eye_colors = {
  matt: "Brown",
  karsten: "Blue",
  ben: "Grey",
  jason: "Hazel",
}

puts eye_colors

foo = "foo"

puts foo
puts :foo

puts "I am going to double the number you give me. I can math!"

number = gets.chomp

puts "You gave me: \"#{number}\". Now I will double it."

puts double(number.to_i)

puts square(72_000) # Instead of commas, we can use underscores.
