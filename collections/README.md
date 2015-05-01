# DOM Example - Collections

We're going to practice DOM manipulation for collections of elements.

In the first example, we only grabbed elements that had IDs. This
allowed us to work with individual elements.

However, in this example we're going to select groups of elements and
see how to work with them.

- Look at `collections.html` and examine the HTML.
- Also open `collections.js` in Sublime. We're going to write our JavaScript here.
- Open `collections.html` in Chrome.

## Part 1

- Use `.querySelectorAll` to retrieve all of the `<li>` elements.
- Set `.style.borderBottom` on *each* of them.

## Part 2

- Use `.querySelectorAll` to retrieve all of the elements with
  the class of `datatype`.
- Turn all of them `red`.
- Hint: you'll need to use the `.style.color` property and loop over each element.

## Part 3
- Use `.querySelectorAll` to retrieve all of the elements with a class
  of `function`.
- Use a loop to change color of each one to `blue`.

## Further Questions

- What are the differences between `.getElementById`,
  `.getElementsByClassName`, `.getElementsByTagName`, and
  `querySelectorAll`?
  // The .getElements retrieve specically tagged elements as an //indidivual object, and will return null if it doesnt exist. //querySelector will return an error if they do not exist, and 
  //querySelectorAll will return all matching retrieved elements
  //as an array.
- How did you loop over the lists of elements?
  //Looping over the array returned from querySelectorAll with a //for loop.
