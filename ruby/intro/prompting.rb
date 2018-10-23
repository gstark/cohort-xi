# while true do
#   puts "Give me a number:"
#   number = gets.chomp.to_i
#   if number > 100
#     puts "That number is TOO BIG."
#     break
#   end
# end

done = nil
i = 0
while !done
  i += 1
  sleep 1
  puts "i: #{i}"
  if i > 10
    done = true
  end
end

puts "Now im done."
