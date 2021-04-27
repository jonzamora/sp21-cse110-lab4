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
9. The code causes an error because the iterator variable `i` is not defined outside of the scope of the `for` loop block since it was declared using the `let` keyword.
10. Line 12 prints `3` because that is the length of the `prices` array that is passed into the function as an argument.
11. This function will return the `discounted` array that holds each discounted price from the `prices` array after each price was discounted by a factor of `0.5`. Note that these prices were not rounded to a precision of no more than 2 decimal places.
12. Notation

    A. Accessing the value of the name property in the student object
    
    `student.name`
    
    B. Accessing the value of the Grad Year property in the student object
    
    `student.['Grad Year']`
    
    C. Calling the function for the greeting property in the student object
    
    `student.greeting()`
    
    D. Accessing the name property of the object in the Favorite Teacher property in student
    
    `student.['Favorite Teacher'].name`
    
    E. Access the first index in the array of the courseLoad property of the student object
    
    `student.courseLoad[0]`
    
13. Arithmetic

    A. `'3' + 2`
    
    - The output is `'32'` because `'3'` is a string and the `2` is concatenated to the end of it.
    
    B. `'3' - 2`
    
    - The output is `1` because the `'3'` is converted to a number and the `2` is subtracted from it to get an output of `1`.
    
    C. `3 + null`
    
    - The output is `3` because the `null` is converted to a 0 and then added to `3`, resulting in an output of `3`.
    
    D. `'3' + null`
    
    - The output is `3null` because `null` is converted to a string and then concatenated to the end of `'3'`, resulting in an output of `3null`.
    
    E. `true + 3`
    
    - The output is `4` because `true` is converted to a 1 and then added to `3`, resulting in an output of `4`.
    
    F. `false + null`
    
    - The output is `0` because `false` is converted to a 0 and the null is also converted to a `0`, resulting in a sum and output of `0`.
    
    G. `'3' + undefined`
    
    - The output is `3undefined` because `undefined` is converted to a string and then concatenated to the end of `'3'`, resulting in an output of `3undefined`.
    
    H. `'3' - undefined`
    
    - The output is `NaN` because `undefined` is converted to `NaN` (Not A Number) type, indicating that the type conversion failed so the subtraction operation could not be completed.
    
14. Comparison

    A. `'2' > 1`
    
    - The output is `true` because `'2'` is converted to the number 2, `'1'` is converted to the number 1, and it is true that 2 is greater than 1.
    
    B. `'2' < '12'`
    
    - The output is `false` because, when the strings are compared lexicographically, the `'2'` on the left-hand-side is greater than the `'1'` on the right-hand-side. As a result of `'2'` being greater than the `'1'`, the lexicographical comparison returns `false`.
    
    C. `2 == '2'`
    
    - The output is `true` because `'2'` is converted to a number 2 and, when compared for equality to another number 2, the comparison returns `true`.
    
    D. `2 === '2'`
    
    - The output is `false` because with the strict equality operator, the type of each variable is also compared, and since the type on the left is a number and the type on the right is a string, the comparison returns `false` due to the type inequality.
    
    E. `true == 2`
    
    - The output is `false` because the number 2 is not equal to the number representation of `true` (1 does not equal 2), resulting in a comparison result of `false`.
    
    F. `true === Boolean(2)`
    
    - The output is `true` because the number 2 gets explicitly converted to be `true` with the `Boolean()` conversion, and since true equals true, the comparison returns `true`.
    
15. The difference between the `==` and `===` operators is that `==` does type conversion prior to checking for equality, whereas `===` does not perform type conversion before checking for equality. For example, `'110' == 110` will return true since the `==` operator converts `'110'` to be a number, and the number 110 matches the other 110, resulting in a `true` comparison result. However, if `'110' === 110` were to be performed instead, the result would be `false` since the types of each variable would need to match in order for the comparison to return a `true` result.

17. See [part1b-question16.js](part1b-question16.js)
    - Output:
    ```
    21
    45
    5
    2
    ```
17. The function `modifyArray(array, callback)` will return a `newArr` array that performs a function callback to `doSomething(num)` for each value in the input array `[1, 2, 3]` and doubles each value, returning a new array of `[2, 4, 6]` with doubled values.

19. See [part1b-question18.js](part1b-question18.js)

21. The output of this code is:
    ```
    1
    4
    3
    2
    ```
    The output of `1 4 3 2` is displayed on a separate line for each number in the provided order. While 1 is printed instantly, 4 is printed before 3 because there is no Timeout to process, 3 is printed before 2 because it processes a Timeout of 0 milliseconds, and 2 is printed last because it processes a Timeout of 1000 milliseconds.
