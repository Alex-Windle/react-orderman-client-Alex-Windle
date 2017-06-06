<p align="center">
  <img src="../logo/logo_index.png">
</p>

# TalkRise OrderMan Milestone 2
These are the docs for Milestone 2 of this project. They are meant to tell you *what* to do, but not *how* to do it in great detail. If you need additional help, see the reference solution by checking out branch [`m2_complete`](https://github.com/TalkRise/React_OrderMan/tree/m2_complete), or feel free to ask your instructor or other students.

When you are done with this milestone, you should have

* Configured Redux
* Integrated Redux with `react-router-dom` via `react-router-redux`
* Integrated Redux with your Login and Signup form via `redux-form`
 * Working Signup
 * Working Login
 * Setup a common layut for authenticated pages
 * CRUD Actions on Customers Models

## When to Use This Guide

You should use this guide when you are completing Milestone 2.

## Overview

* [Goals](#goals)
* [Reference Solution](#reference-solution)
* [Setup](#setup)
* [Guide](#guide)

## Reference Solution

**If you need further help completing Milestone 2, please reference our solution in the [`m2_complete`](https://github.com/TalkRise/React_OrderMan/tree/m1_complete) branch of this repo.**

[Milestone 2 Demo](https://react-orderman-m1.herokuapp.com/#/)
  
## Setup

1. Make sure the [API](https://github.com/TalkRise/React_OrderMan_API) is running.

2. Make sure you are using the right version of Node and npm (we use nvm for node version management)

```bash
nvm use
```

2. Install dependencies and start the developent server

```bash
yarn
npm run dev
```

If everything is running correctly, you should see the phrase "You know what to do" in your browser.

## Application Structure

We use a feature-focused organization for our app where our directories represent the different pages of the application.

 <p align="center">
   <img src="../logo/M2_Complete_App_Structure.png">
 </p>
 
 We know this looks super intimidating, but stay calm, follow our instructions, and we'll get through this milestone together!
 
 ## Instructions to Complete M2
 
These are the instructions to complete Milestone 2. 

**Install New Dependencies**

```bash
yarn add redux react-redux react-router-redux@next redux-form redux-thunk 
```

**Create New Files**

Use the *Application Structure* above to create several new files. Again, don't freak out, we'll guide through. 

* `rootReducer.jsx` - *File to create and combine Redux reducers. Start with the `routerReducer` from `react-router-redux` and the `form-reducer` from `redux-form`.*

* `configureStore.jsx` - *Create and export a Redux store with `redux-thunk` middleware, `react-router-redux` middleware, and the Redux DevTools.*

* `apiUtilities.jsx` - **COPY AND PASTE this file from this [Gist]().**





======================================

* `SuccessButton.jsx` - *A reusable button*

* `UnauthenticatedLayout.jsx` - *A reusable layout component that provides consistent structure to the Login and Signup (unauthenticated) pages*

  * The `UnauthenticatedLayout` component should render a `Logo`, as well as a `LoginForm`*

* `Logo.jsx` - *Reusable component to display a Logo (image)*

* `LoginForm.jsx` - *A form component that renders email and password text inputs, as well as a `SuccessButton`. Also contains a 

* `Link` from `react-router-dom` that links to the */signup* route.*

* `SignupForm.jsx` - *A form component that renders email and password text inputs, as well as a `SuccessButton`. Also contains a `Link` from `react-router-dom` that links to the */login* route.*

* `UnauthenticatedContainer.jsx` - *A container that renders an `UnauthenticatedLayout`. It also renders a `Switch` from `react-router-dom` as well as two `Route`s, one pointing to the */login* (renders `LoginForm`) and one pointing to */signup* (renders `SignupForm`).*

* `Routes.jsx` - *A container that renders several components from `react-router-dom` that controls routing. In this milestone, `Routes` will render a simple `Router` with a `history` object created using `history/createHashHistory`, a `Switch`, and a `Route` that renders an `UnauthenticatedContainer`.*

**Update `boot.jsx`**

Update `boot.jsx` to render the `Routes` component instead of `App`.

Delete the `App.jsx` component.

## License

This project is released under the [MIT license](MIT-LICENSE). Go nuts!

 <p align="center">Built By:</p>
 <p align="center">
   <img src="../logo/tr_index.png">
 </p>
