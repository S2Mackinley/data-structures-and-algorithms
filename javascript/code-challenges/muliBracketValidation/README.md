# ![cf](https://i.imgur.com/7v5ASc8.png) Multi Bracket Validation


# Challenge Summary

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

```
Round Brackets : ()
Square Brackets : []
Curly Brackets : {}
```

## Challenge Description

|Input  |Output |
|-------|-------|
|{}                         |TRUE|
|{}(){}                     |TRUE
|()[[Extra Characters]]     |TRUE
|(){}[[]]                   |TRUE
|{}{Code}[Fellows](())      |TRUE
|[({}]                      |FALSE
|(](                        |FALSE
|{(})                       |FALSE

## Approach & Efficiency

Declare a stack that holds an array of opening parens
declair an array to implement stack
traverse the string expression using a for loop
if the current character is an oening bracket then push it into the stack
if the character is a closing bracket then pop it off the stack
if popped character is the matching start bracket then parens are not balanced
if there is some other bracket somehow left in stack, then brackets are not balanced

## Solution
![rick+roll](muli-bracket.png
)
