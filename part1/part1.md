1. 3; i persists as a variable and is still printed.
2. 150; the last price calculated of discountedPrice is still available.
3. 150; finalPrice is within the scope of this block.
4. [50 100 150]; the function cuts each of the input prices in half and puts them in the returned array
5. ReferenceError; i is restricted in scope to the for block
6. ReferenceError; discountedPrice is only defined in the for block
7. 150; this is the final price that was calculated in the function, and exists within the whole function's scope
8. [50 100 150]; the function performs the same as in problem 4
9. ReferenceError; same reason as problem 5
10. ReferencError; same reason as problem 6
11. 0; finalPrice remains 0 through the whole program
12. TypeError; the function attempts to reassign values to constant variables, which will throw type errors

13a. student.name
13b. student['Grad Year']
13c. student.greeting()
13d. student['Favorite Teacher'].name
13e. student.courseLoad[0]
14a. 32. The type is cast to string, which concatenates 3 and 2.

14b. 1. The type is cast to int, as strings can't be subtracted.
14c. 3. 3 and null is typed as an int, with null interpreted as 0.
14d. 3null. The types are strings and null is concatenated with 3.
14e. 4. true is interprted as 1.
14f. 0. Both false and null are interpreted as 0. 
14g. 3undefined. Both sides are typed to strings.
14h. NaN. Since undefined is not a number, the whole operation comes out to NaN.

15a. True. This is basic comparison.
15b. False. Both sides are strings and 12 is less alphabetically.
15c. True. '2' is converted to a number, 2 == 2.
15d. False. 2 and '2' are different types, and thus are not equal.
15e. False. true != '2'
15f. True. Boolean(x), where x > 0, is always true, so true == true.

16. == tries to make both values equal in type before comparison, while === strictly compares the two sides on both value and type.

17. How are you? . While any value greater than 0 is interpreted as true, the value 2 itself is not equals to true; it must first be interpreted through Boolean(2) to resolve to true.

18. separate file.

19. [6, 8 ,10]. For each value, the function doSomething first adds 2 to the value, then the function(x) multiplies the value by 2.

20. 

21. 1
    2
    3
    4