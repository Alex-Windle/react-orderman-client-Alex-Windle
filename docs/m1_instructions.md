<p align="center">
  <img src="../logo/logo_index.png">
</p>

# TalkRise OrderMan Milestone 1
These are the docs for Milestone 1 of this project. They are meant to tell you *what* to do, but not *how* to do it in great detail. If you need additional help, see the reference solution by checking out branch [`m1_complete`](https://github.com/TalkRise/React_OrderMan/tree/m1_complete), or feel free to ask your instructor or other students.

When you are done with this milestone, you should have

* Created Login and Signup pages
* Setup a common layout between them for unauthenticated pages
* Used `react-router-dom` to route between the Login and Signup pages

You DO NOT need to have the Login and Signup forms working yet. We will cover the login and signup process in the next milestone when we introduce Redux.


## When to Use This Guide

You should use this guide when you are completing Milestone 1.

## Overview

* [Goals](#goals)
* [Reference Solution](#reference-solution)
* [Setup](#setup)
* [Guide](#guide)

## Reference Solution

**If you need further help completing Milestone 1, please reference our solution in the [`m1_complete`](https://github.com/TalkRise/React_OrderMan/tree/m1_complete) branch of this repo.**

[Milestone 1 Demo](https://react-orderman-m1.herokuapp.com/#/)
  
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
   <img src="../logo/M1_Complete_App_Structure.png">
 </p>
 
 ## Instructions to Complete M1
 
These are the instructions to complete Milestone 1. 

**Install New Dependencies**

```bash
yarn add react-router-dom history
```

**Create New Files**

Use the *Application Structure* above to create several new files. 

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
