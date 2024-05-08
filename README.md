# Basic User Search

Basic Vue.js SPA built as a test task for a frontend position.

Tools used:

* Vue.js
* Vuex
* Vite (build system)
* Sass (SCSS syntax)

Features implemented as part of the initial requirements:

* Component styles are scoped (isolated from each other)
* Multi-user search using ID or Username field (use commas to separate users). Users are pulled from [jsonplaceholder](https://jsonplaceholder.typicode.com/users)
* Non-fuzzy search to save API calls and computing power
* Vuex's actions and mutations dynamically manipulate the store: the sidebar passes the necessary data to the user info section to the right on user input. For example, a successful search sets the first user found as active, putting their data in the section to the right; a user can also be set to active by clicking the corresponding button in the sidebar; clearing the search form also clear the main info section to the right 
