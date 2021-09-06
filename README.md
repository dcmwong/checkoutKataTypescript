# Checkout KATA using typescript

To run the project:
 - `yarn`
 - `yarn test` or `yarn test:watch` (recommended)

`git checkout section1` for each section and read the note below to see what changes in each section.

I've committed new branches at certain points of the kata to highlight important points.  I would recommend trying this kata in a TDD fashion yourself not to solve the problem but to get a feel for how the flow of TDD works.  In real life we may never TDD due to problems not being well defined and understood well enough, however even in this small problem space like the checkout kata it's hard to stay disciplined in the act of TDD.

It is something that has to be experienced but I hope these notes help and highlight important aspects of it.

### Remember Red, green and refactor

This means create a failing test, make it go green with the simplest solution possible and then go back to make it pretty or easier to maintain.

## Sections

#### Section 1

A minimal setup for a passing test.  Notice that I've written the Checkout class in the same file as the test file.  Again the simplest solution possible means even leaving the organisation of files till the refactor stage.

#### Section 2a

Implementing the first parts of logic by summing the items.  The way we differentiate between items is by a simple `if` statement. 

#### Section 2b

Just a quick step to note that we should always think about null, zero or undefined cases.

#### Section 3

In section2a we used the if statement to control flow.  With 2 items we could even leave it as this.  However more than 2 we may begin to implement a switch statement, any more and we should create a map/dictionary and store them as values.  This is the first step to separating out data from logic.  Notice we inject the data in from the test.  This means in the future the data can easily be manipulated and new cases can be tested by changing data not the logic.

#### Section 4

Now that we have a pattern established for injecting more logic into our Checkout class it's time to implement the discount piece.  See how the data lives in the test and is passed to `Checkout`.  More test cases are added to cover multiple scenarios.

#### Section 5

Finally we add the last case for discounts on item B.  Notice how it was a case of adding a couple of tests and then a one line addition in the actual code.  Due to the way we've structured our code we can add new behaviour without even touching the internal logic.


## A word on classes and OO

I've implemented this kata in an OO fashion.   Meaning I've used classes and "injected" it's dependencies via the constructor.  This is a style of programming where we can clearly see where the logic is and we can use typescript to create interfaces that nptify and prevent other developers about our initial intent.  There are other styles we use namely Functional programming.  This doesn't mean just writing small functions, that is just called Procedural programming.  

I've chosen this method as it's easier to grasp and clear to decipher.  Functional programming can make Checkout.ts almost to 3 lines of code with the same output.  But unless you write a lot of code in a functional manner it will be hard to read and understand.

There are merits in both ways but fundamentally we need to be mindful of how we organise our code I prefer to do with types and interfaces.  Organising it by database entitites or files and directories does not lend itself to be changed easily or be discovered by future developers.  These are the only truths about our programs is that it will be read by others and it will be changed by others, so let's make these the most important attirbutes of the software we write.

