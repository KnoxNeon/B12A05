1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   getElementById selects one element by its unique id, getElementsByClassName selects all elements for the given class, querySelector / querySelectorAll selects CSS selectors such as #id .class and querySelector returns the first matching element whereas querySelectorAll returns all the matching elements. 

2. How do you **create and insert a new element into the DOM**?
   We can create new elements using document.createElement and insert it as direct html using .innerHTML or as a child using .appendChild.

3. What is **Event Bubbling** and how does it work?
   Event bubbling is the process of moving of events such as click, double-click from child to its parent. It works on child first then its parent.
   
4. What is **Event Delegation** in JavaScript? Why is it useful?
   Event delegation is a technique where an event listener is added to the parent which handles the events for its children. It is useful because we dont have to write separate event listener multiple times for multiple child.
  
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   preventDefault() cancels the default browser behavior of an element and stopPropagation() prevents event bubbling.


