# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# method name: num_odd_even
# input: number
# output: string
# process: create a method to take in a number and return into a string (def...end), use a conditional statement (medulo) to determine if the number is even or odd, using string interpulation it will place argument in the correct string "#{} is even" or "#{} is odd", use p to print so it will actually appear in the terminal.
def num_odd_even number # method name holding the parameter of number
    if number % 2 == 0 # conditional statement that uses medulo operator to check if the number has a remainder
       p "#{number} is even" # if no remainder, this will print
    else
       p "#{number} is odd" # if remainder, this will print
    end
end
num_odd_even(reposts1) # calling the method and passing reposts 1,2,3
num_odd_even(reposts2)
num_odd_even(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# method name: no_vowels
# input: string 
# output: a string without any vowels
# process: create a method to take in a string and delete all the vowels from it, use .delete method to get rid of the specific vowel characters, add p to make sure it prints code into the terminal.

def no_vowels string # method that takes in a string as its parameter
    string.delete "aeiouAEIOU" # will take in the value of the string andd delete any vowel character whether capitalized or not
end
p no_vowels(beatles_album1) # calling the method and passing beatles_album 1,2,3 
p no_vowels(beatles_album2)
p no_vowels(beatles_album3)
# added the all capitalized aeiou to make sure the A in the thrid test variable would be read and same with any other capitalized vowel if put through this method. but it did work without the capitalized aeiou for the first two test variables.

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# method name: pali_words
# input: a string
# output: a string of if the used string is a palindrome or not
# process: create a method that will take in a string and determine if its a palindrome, in the conditional statement i lowercase the string then reverse the string. i check the string to see if its the same both ways.

def pali_word string # this is my method and it takes in the string as a parameter
    if string.downcase == string.reverse.downcase # conditional statement that checks the lowercase string on itself to see if its the same reversed
       p "#{string} is a palindrome" # will print if true
    else
       p "#{string} is not a palindrome" # will print if false
    end
end
pali_word(palindrome_test_case1) # calling the method and passing palindrome_test_case 1,2,3 
pali_word(palindrome_test_case2)
pali_word(palindrome_test_case3)

# I forgot to add the downcase at first at my code wasn't running but then I remembered that conditional statements and code in general needs to be specific so I added the .downcase to make sure the conditional statement was actually testing the if statement correctly. then it worked