# Part 1. Intro to Javascript Questions
---
### Part 1a. A Quick Introduction...
1. Line 9 prints: `values added:  20`
2. Line 13 prints: `final result:  20`
3. Line 9 prints: `values added:  20`
4. Line 13 returns an error because `result` is not defined outside of the `if` statement's scope.
5. The code returns an error because we are trying to modify `result` on line 7 after it was set to `const` type on line 5.
6. The code returns an error because we are trying to modify `result` on line 7 after it was set to `const` type on line 5.

### Part 1b. A Little More of a Challenge...
1. Line 12 prints `3` because that is the length of the `prices` array we passed into the function as an argument.
2. Line 13 prints `150` because that is the last discounted price from the `prices` array after the last value of `300` was discounted by a factor of `0.5`, resulting in a final price of `150`. Note that this value of `150` has not been rounded to 2 decimal places.
3. Line 14 prints `150` because that is the final discounted price that will be pushed into the `discounted` array after it was discounted by a factor of `0.5` and rounded to have a precision of no more than 2 decimal places.
4. This function will return the `discounted` array that holds each discounted price from the `prices` array after each price was discounted by a factor of `0.5` and rounded to have a precision of no more than 2 decimal places.
5. The code causes an error because the iterator variable `i` is not defined outside of the scope of the `for` loop block since it was declared with the `let` keyword.
6. The code causes an error because the variable `discountedPrice` is not defined outside of the scope of the `for` loop block since it was declared with the `let` keyword.
7. Line 14 prints `150` because that is the final discounted price that will be pushed into the `discounted` array after it was discounted by a factor of `0.5` and rounded to have a precision of no more than 2 decimal places. The scope of the `finalPrice` variable is the function block itself because of where it was declared, so although it was modified in the `for` loop, it does not result in an error.
8. This function will return the `discounted` array that holds each discounted price from the `prices` array after each price was discounted by a factor of `0.5` and rounded to have a precision of no more than 2 decimal places.
9. 