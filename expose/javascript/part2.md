1. What will happen at line 12 and why? If the code causes an error, explain why. <br />
It prints '3', which is the last value of 'i' after the forloop above it was done <br />

2. What will happen at line 13 and why? If the code causes an error, explain why. <br />
It prints '150', the value of 'discountedPrice' after the last iteration of the forloop <br />

3. What will happen at line 14 and why? If the code causes an error, explain why. <br />
It prints '150', the value of 'finalPrice' after the last iteration of the forloop <br />

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why. <br />
It returns an array that holds values [50,100,150], which is all the final prices after the discount was applied to all of the individual prices in the array passed into the function. <br />

5. What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)). <br />
It returns an error (since it tries to pull the value of 'i' that was declared in a different block above it)

6. What will happen at line 13 and why? If the code causes an error, explain why. <br />
It returns an error (since it tries to pull the value of 'discountedPrice' that was declared in a different block above it) <br />

7. What will happen at line 14 and why? If the code causes an error, explain why. <br />
It prints '150', the value of 'finalPrice' after the last iteration of the forloop. The reason this one works is because the 'finalPrice' is declared in the same block. <br />

8. What will this function return? Give a brief explanation. If the code causes an error, explain why. <br />
It still returns an array that holds values [50,100,150], which is all the final prices after the discount was applied to all of the individual prices in the array passed into the function. Although we did use some temporary values to calculate the prices, we were able to save them right before those values got out of scope <br />

9. What will happen at line 11 and why? If the code causes an error, explain why. <br />
It returns an error (it gives an error because the 'i' after the forloop is out of the scope and can't be accessed no more. <br />

10. What will happen at line 12 and why? If the code causes an error, explain why. <br />
It prints '3', since this is the length of the array that was passed in. <br />

11. What will this function return? Give a brief explanation. If the code causes an error, explain why. <br />
It returns an array that holds values [50,100,150], which is all the final prices after the discount was applied to all of the individual prices in the array passed into the function. The reason this works is although we do have a const within the forloop, we keep INITIALIZING it over and over instead of REASSIGNING the value of it, so it still works. <br />

12. Given the above Object, write the notation for:<br />
A. Accessing the value of the name property in the student object <br />
student.name <br />
B. Accessing the value of the Grad Year property in the student object <br />
student['Grad Year'] <br />
C. Calling the function for the greeting property in the student object <br />
student.greeting() <br />
D. Accessing the name property of the object in the Favorite Teacher property in student <br />
student['Favorite Teacher'].name <br />
E. Access the first index in the array of the courseLoad property of the student object <br />
student.courseLoad[0] <br />

13. Arithmetic <br />
A. ‘3’ + 2 = '32' (the digit 2 maps to a string "2") <br />
B. ‘3’ - 2 = 1 (numeric conversion of string '3') <br />
C. 3 + null = 3 (null is converted to digit 0) <br />
D. '3’ + null = '3null' (null is converted into a string "null") <br />
E. true + 3 = 4 (true is converted into a digit 1) <br />
F. false + null = 0 (both false and null get converted into 0, a digit) <br />
G. '3' + undefined = '3undefined' (undefined converted into a string) <br />
H.  '3' - undefined = NaN (undefined converts int NaN, which turns this entire expression into NaN) <br />

14. Comparison <br />
A. ‘2’ > 1 returns true ('2' is converted into a digit) <br />
B. ‘2’ < ‘12’ returns false (strings are compared letter-by-letter in the “dictionary” order, and '12' is smaller in that case) <br />
C. 2 == ‘2’ returns true ('2' is converted into a digit) <br />
D. 2 === ‘2’ returns false (they are not the same type, therefore, false) <br />
E. true == 2 returns false (true turns into 1, which makes the statement false) <br />
F. true === Boolean(2) returns true (Boolean(2) converts digit 2 into an actual boolean with a value of 'true') <br />

15. Explain the difference between the == and === operators. <br />
A strict equality operator '===' checks the equality without type conversion, while '==' can convert the types of variable for the comparison <br />

16. Answer in part2-question16.js <br />

17. What the current function does is whichever array you pass into it, it will return the same array back with all of its values multiplied by 2. You call modifyArray function to take that array as an input and iterate through it, and within modifyArray function you callback doSomething function to multiply individual elements of that array by 2. <br />

18. Answer in part2-question18.js <br />

19. What is the output of the above code? <br />
```
1
4
3
2
```
<br />
