# Component Lifecycle / useEffect Hook

## effects hook

### 1. What purpose does useEffect serve in a function component compared to its counterpart(s) in class components?

We pass a function to the useEffect Hook. This function we pass is our effect. When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one. Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result — each effect “belongs” to a particular render.

Conceptually, we want these functions to happen after every render — but React class components don’t have a method like this. We could extract a separate method but we would still have to call it in two places.

### 2. When using the useEffect Hook:

- What does useEffect do?

  - By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

- Why is useEffect called inside a component?

  - Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

### 3. Explain the importance of properly implementing effects with Cleanup

For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak. In a React class, you would typically set up a subscription in componentDidMount, and clean it up in componentWillUnmount. React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.