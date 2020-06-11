1. What problem does the context API help solve?

Context API solves the problem of passing down props from multiple generatoins aka prop drilling. We can now store data in a context object instead of props. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where all the changes within the application will sit. The store contains our state. 

When changes are made to the state this is an action. 

All actions go through reducers, which take the current state, and clone it to produce a different state. This circumvents the immutibility some state has. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

An application state is immutable while a component state is not. It seems easier to keep track of state changes with Application state, but may be easier to manipulate state with less code and change it within a component state. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is pretty cool. It allows you to console log your actions as they flow to your action creators but before they hit the reducer. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Honestly, I am not sure. I could use a list of them and that would help. My guess would be useState only because I seem to have the most experice with it. I am open to new concepts and ideas which is important as a coder since it seems like our field is constantly shifting and improving. 
