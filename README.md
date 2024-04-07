# GotoInc test task

Application that allows users to create a request for the transportation of your parcel or deliver another user's package.

**Deployed on** - [https://gotoinc-test-task.vercel.app/](https://gotoinc-test-task.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App structure

Main pages:

- /\<id>/create - select request type (order or deliver)
- /\<id>/create/order - create order request
- /\<id>/create/deliver - create delivery request
- /\<id>/requests - list of all user requests
- /\<id> - redirect to /\<id>/requests
- /requests - list of all requests

\<id> - defines the user. According to this parameter, the created request will be added to a
certain user.

The list of user requests reflect all user-created requests through table. The user is able to:

- edit the request using the dialog window
- delete the request
- show matched requests

Matches are
displayed according to the following principle: the same city from which the parcel is delivered,
the same city where the parcel is delivered, same dispatch date

The list of all requests page have all requests of all users. User is able to sort all requests by the date of dispatch, by default sort by the date of creation of requests

## Tech stack

1. Next.js
2. SCSS
3. Shadcn/ui + Tailwindcss
4. Redux toolkit
5. Localstorage
