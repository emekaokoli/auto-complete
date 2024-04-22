# A simple auto complete react app.

## Features

- [x] Auto complete based on user input.
- [x] Highlight the matching part of the text as the user types.
- [x] Handle keyboard navigation through options using the arrow keys and selects an option with Enter key.
- [x] use of custom hooks to manage state and logic.
- [x] leverage single responsibility to improve code readability and maintainability.
- [x] mimick asynchronous way of displaying data as the user searches for words.

## how to use

```bash
pnpm install
```

## to run the app

```bash
pnpm run dev
```
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