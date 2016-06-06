# ng2-bootstrap-daterangepicker
This app demonstrates how to wrap third-party components in an Angular 2 directive. For this example, we used [Date Range Picker](http://www.daterangepicker.com/), a date picker built around Bootstrap. We accomplished the Angular 2 integration by creating a directive, injecting an instance of `ElementRef`, and instantiating the date picker directly on the `ElementRef.nativeElement`.

## Prerequisites
- You must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js + NPM](https://github.com/creationix/nvm#install-script) installed

## Running the app
Run the following commands to get started:

```bash
cd ~/your-project-directory

# Get the code
git clone https://github.com/onehungrymind/ng2-bootstrap-daterangepicker.git
cd ng2-bootstrap-daterangepicker

# Install dependencies and typings
npm i

# Run the app
npm start
```

The app is now available at [localhost:3000](http://localhost:3000).
