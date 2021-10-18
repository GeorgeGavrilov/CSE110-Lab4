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
