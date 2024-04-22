This is a simple auto-complete component built using React and TypeScript. It allows users to input text and provides suggestions based on the input value.


## Features

- [x] Auto complete based on user input.
- [x] Highlight the matching part of the text as the user types.
- [x] Handle keyboard navigation through options using the arrow keys and selects an option with Enter key.
- [x] Use of custom hooks to manage state and logic.
- [x] Leverage single responsibility to improve code readability and maintainability.
- [x] Asynchronous filtering of options
- [x] No third-party libraries used.


## Usage
Type something in the input field to see auto-complete suggestions, wait for 10 seconds before data populates as it is miming a real API call.
Use the arrow keys to navigate through the suggestions.
Press Enter to select a suggestion.

## how to use

```bash
pnpm install
```

## to run the app

```bash
pnpm run dev
```
The app should now be running on http://localhost:3000.

## Directory
```bash
src
 ┣ assets
 ┃ ┗ react.svg
 ┣ components
 ┃ ┣ input
 ┃ ┃ ┗ input.tsx
 ┃ ┗ Loading
 ┃ ┃ ┣ loading.css
 ┃ ┃ ┗ loading.tsx
 ┣ hooks
 ┃ ┣ use_filter_search.tsx
 ┃ ┗ use_get_data.tsx
 ┣ modules
 ┃ ┗ search
 ┃ ┃ ┣ auto_complete.tsx
 ┃ ┃ ┗ search.css
 ┣ ___data___
 ┃ ┗ mock.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┣ types.d.ts
 ┗ vite-env.d.ts
```

## Data Source
The app uses mock data by default. If you want to use a real data source, you can replace the mock data with data fetched from a public API. See the use_get_data.tsx file for more details on how to fetch data asynchronously.

