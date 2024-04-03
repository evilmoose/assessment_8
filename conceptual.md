### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  JavaScript library for building used to create interactive and reusable UI components.

- What is Babel?
  A JavaScript compiler that transforms modern JavaScript code into backward-compatible versions for older browsers.

- What is JSX?
  JSX is a syntax extension for JavaScript used in React to describe what the UI should look like by writing HTML in your JavaScript.

- How is a Component created in React?
  A Component in React is created by defining a function or class that returns a React element, often using JSX.

- What are some difference between state and props?
  The difference between state and props in React is that state is managed within the component and can change over time, while props are passed to the component from a parent and are immutable.

- What does "downward data flow" refer to in React?
  "Downward data flow" in React refers to the passing of state and functionality from parent components to child components through props.

- What is a controlled component?
  A controlled component in React is one that controls the input form elements where the form data is handled by the component's state.

- What is an uncontrolled component?
  An uncontrolled component is one where form data is handled by the DOM itself, not by the React component state.

- What is the purpose of the `key` prop when rendering a list of components?
  The key prop helps React identify which items in a list have changed, are added, or are removed, improving performance during updates.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Using an array index as a key prop is poor because it can lead to performance issues and bugs, particularly if the order of items changes.

- Describe useEffect.  What use cases is it used for in React components?
  'useEffect' is a hook in React used for side effects in functional components, such as data fetching, setting up a subscription, and manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  'useRef' returns a mutable ref object whose .current property is initialized to the passed argument; changes to a ref don't cause a rerender of the component.

- When would you use a ref? When wouldn't you use one?
  You would use a ref for direct access to a DOM element or to keep a mutable variable across renders, and you wouldn’t use it for triggering re-renders.

- What is a custom hook in React? When would you want to write one?
  A custom hook in React is a function that starts with use and allows you to use state and other React features in it; you would write one to extract component logic into reusable functions.
