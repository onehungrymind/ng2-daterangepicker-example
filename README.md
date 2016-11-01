# ng2-daterangepicker-example
> **NOTE:** this project was intended to be an internal prototype for us. As such, everyone is welcome to use it for their own purposes, we just will not be supporting it.

This app demonstrates how to wrap third-party components in an Angular 2 directive. For this example, we used [Date Range Picker](http://www.daterangepicker.com/), a date picker built around Bootstrap. We accomplished the Angular 2 integration by creating a directive, injecting an instance of `ElementRef`, and instantiating the date picker directly on the `ElementRef.nativeElement`.

## Prerequisites
- You must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js + NPM](https://github.com/creationix/nvm#install-script) installed

## Running the app
Run the following commands to get started:

```bash
cd ~/your-project-directory

# Get the code
git clone https://github.com/onehungrymind/ng2-daterangepicker-example.git
cd ng2-daterangepicker-example

# Install dependencies and typings
npm i

# Run the app
npm start
```

The app is now available at [localhost:3000](http://localhost:3000).
