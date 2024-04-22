1. Both Component and PureComponent are based classes in React app.
   in component, it re-renders unnecessarily irrespective of whether the actual values have changed or not.
   also it does not perform optimization checks before rendering which can be very expensive.

while in pureComponent, it does a shallow comparison of state to check if the component should re-render.

2. Combinning both makes the app re-render, especially as a user interacts with it, If the context value changes frequently, the component will re-render even if the prop remains the same, this usually can lead to unnecessary re-renders and performance issues in a very large application.

3. a. from parent to child through passing props to the child component
   b. from child to parent through passing props to the parent component
   for example, a parent component can pass a callback function to the child component, which can be called by the child component to update the state of the parent component.

c. The use of context to use the values/state directly in the app that needs the state.

4.  a. using useMemo to memoise values with expensive calculations
    b. using useRef to store values that need to be accessed across multiple renders

5.  its a built-in jsx syntax that is used to wrap a component without introducing an extra DOM node, it does not really break the app, it only highlights a syntax error when a developer wraps multiple elements without a parent element.

6.  a.

```bash
function withAuth(Component) {
  return (props) => {
    const isAuthenticated = /* Check user authentication */;

    return isAuthenticated ? <Component {...props} /> : <p>Please log in.</p>;
  };
}
```

b.

```bash
const withDataFetching = (url) => (WrappedComponent) => {
  const DataFetchingComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [url]);

    return <WrappedComponent data={data} loading={loading} />;
  };

  return DataFetchingComponent;
};
```

c.

```bash
function withLoader(Element, url) {
return (props) => {
  // Logic to check if data is still loading
  const isLoading = /* ... */;

  return isLoading ? <p>Loading...</p> : <Element {...props} />;
};
}
```

7. Promimess callback, uses the error-first approach and this usually leads to callback hell.
   async/await, uses the synchronous approach and this usually leads to a more readable code.

8. useState takes upto 2 arguments, the first argument is the initial state value, the second argument is an optional function that is called when the state is updated and it is so because react batches state updates to avoid unnecessary re-renders.
9. a. Replace class with function
   b. Move the React Render Logic to the Function Body
   c. Convert Other Class Methods to Stand-Alone Functions
   d. Update State Handlers, this.state and this.setState to useState
   e. if available change inline props to destructuring

10. Inline, CSS Modules, styled components, CSS-in-JS Libraries etc.
11. React has built-in helpers for that, such as renderToString function in the react-dom/server modules

```bash
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const app = (
  <StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>
);

const html = renderToString(app);

res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My App</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
`);
```
