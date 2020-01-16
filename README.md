# How to structure React and React Native projects

> This a result of experience + Research & Development

It's still **Work In Progress**, although, we believe that it is already a quite complete example.

## Running the app

```
yarn install

// starts Next.js app
cd web_app && npm run dev

// starts React Native app in iOS Simulator
cd native_app
cd ios && pod install
cd .. && npm run ios

// android not ready yet
```

## Tech-Stack

1. GraphQL
2. React with Hooks
3. React Native
4. Apollo
5. Next.js
6. Redux
7. Yarn Workspaces
8. Typescript

## The idea for the app

As a Proof Of Concept we selected a real use-case scenario, which is as follows:

1. Fetching data about Youtube videos from a GraphQL Endpoint.
2. Displaying videos in React and React Native apps.
3. Possibility to fetch more videos.
4. Not playing two videos at the same time (dispatching actions via Redux)


## To Do:

1. Android version.
2. Checking TypeScript implementation.
3. Tests.
