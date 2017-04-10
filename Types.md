Types

q1.

What's the type of: "Hello"

Ans: String
________________________________

q2.

What's the type (including subtypes) of:

{hello: 1}

Ans: Object, key is a string, value is an integer
________________________________

q3.

What's the type of:

[1,2,3]

Ans: Array of integers
________________________________

q4.

What's the type of:

[{hello: 1}, {hello: 1}]

Ans: Array of objects with strings as keys and integers as values
________________________________

q5.

What's the type of:

{
  cats: [{name: 'tiddles', breed: 'persian'}, {name: 'happy', breed: 'burmese'}],
  dogs: [{name: 'Chester', breed: 'labrador'}, {name: 'happy', breed: 'corgi'}]
}

Ans: Object with strings as keys, values are arrays comprised of further objects both they keys and values of which are strings
________________________________
q6.

What types does _.map accept as parameters? What does it return in each case?

Ans: Accepts arrays and a function object to be called for each element of this array. Returns a new array where each element is the return value for this function.
________________________________

q7.

What types does _.filter accept as parameters? What does it return in each case?

Ans: Accepts arrays and a function object to be called for each element of this array. Returns a new array where the elements are only the results which returned TRUE for the callback function on the original array.
