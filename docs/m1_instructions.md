<p align="center">
  <img src="../logo/logo_index.png">
</p>

# TalkRise OrderMan Milestone 1
These are the docs for Milestone 1 of this project.

Here we'll explain how to complete Milestone 1.

**If you need further help completing Milestone 1, please reference our solution in the `m1_complete` branch of this repo.**

[Our Solution](https://github.com/TalkRise/React_OrderMan/tree/m1_complete)

[Milestone 1 Demo](https://react-orderman-m1.herokuapp.com/#/)


## When to Use This Guide

* You are just getting started on the `master` branch and need instructions about what to build.
* You are stuck trying to complete Milestone 1 and want to know what to do next.

## Overview

* [Goals](#goals)
* [Setup](#setup)
* [Guide](#guide)

## Goals

The goals of Milestone 1 

* Feature-Focused Application Structure
* Routing with `react-router-dom`
  
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
   <img src="../logo/Master_App_Structure.png">
 </p>
 
 ## Instructions to Complete M1
 
These are the instructions to complete Milestone 1. They are meant to tell you *what* to do, but not *how* to do it. If you need additional help, see the reference solution by checking out branch `m1_complete`.

**Install New Dependencies**

```bash
yarn add react-router-dom
```

**Create New Files**

Use the *Application Structure* above to create several new files.

block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
`SuccessButton.jsx`

|Prop |Type |
|------|------|
|block |bool |
|disabled|bool|
|loading|bool|
|title|string|
|onClick|func|


## License

This project is released under the [MIT license](MIT-LICENSE). Go nuts!

 <p align="center">Built By:</p>
 <p align="center">
   <img src="../logo/tr_index.png">
 </p>
