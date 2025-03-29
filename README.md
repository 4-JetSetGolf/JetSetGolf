This app will allow users to book time slots at golf courses in different cities and see hotels and restaurants nearby.


# React Forms && JSON Web Tokens

## Forms - allows users to input information

- Controlled forms
  - link each input to a useState
  - all event listeners get passed in an event
  - we can use the event.target to get an element where the event occurred
  - we can use event.target.value on input to get what the user typed in
  - setting up a form
    - setting up an input
      - Create a useState to save the value that the user will type in
      - Set the value of the input to the new useState variable
      - Set the onChange to a function that will run when the user types into the input field -> setUseState(event.target.value)


## Calling an API

-by default, fetch will make a GET request
-fetch takes in an optional second argument which will be an object
-fetch(URL, { key: value })
-Keys for the optional object
  -method -> 'POST'
  -headers - { "Content-Type": "application/json" }
  - body: JSON.stringify({ "name": "Barry Allen", "email": "TheFlash@aol.com"...})


## JWT (JSON Web Tokens) -> credentials that contain a header, payload (data) and a signature

## try/catch - what to do if code works / what to do if code fails