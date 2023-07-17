# Next Base

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### `Node Version`

```
v16.10.0
```

### `Local Environment`

```
cp .env
```

### Install Git

Follow the article to install git: https://www.atlassian.com/git/tutorials/install-git

### Clone the project

open a terminal and type

```bash
$ git clone https://github.com/Daxesh3/next-base.git
```

### `Install Necessary Packages`

Run the following command to install packages from package.json:

```bash
npm i
```

### `Running locally in development mode`

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### `Create Build`

Don't forget to update `.env` file before building the application.<br>

Run following command to build the application:

```bash
npm run build
```

Builds the app for production to the `.next` folder.<br>
It correctly bundles Next in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `Deployment`

First you need to build your application before deployment. Please read Create Build section.<br>

Once your application is built. copy following folders to server:
src, pages, public (if you change site-map or robots file)

then restart pm2 on server.

## Eslint guidelines

Eslint is configured using `eslintConfig` field in `package.json` file. If you need to alter existing rules make change to this property.

This project is setup to lint code before committing and will not allow you to commit code if eslint throws errors.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder structure

```
next-base
└───pages
|   └───index.tsx
|   └───_app.tsx
|   └───_document.tsx
|   └───component
|         └───index.tsx
└───src
│   └───assets
│   	└───fonts   all fonts must be placed here
│   	└───images   all images must be placed here
│   	└───styles   common css will go here
│   	└───styles   all 3rd party/vendor css will go here
│   └───features
│   	└───auth
│   		└───component  all stateless/stateful components go here
│   		└───container  all redux connected components go here
│   └───shared
|	        └───components  reusable common components go here
|	        └───constants   reusable common variable go here
|	        └───icons       reusable common SVG icons go here
|	        └───interface   reusable common type interface go here
|	        └───services    reusable common services (i.e. http.service) go here
...other files
```

## Coding standards

Below are some of the common coding guidelines that should be followed in this project

-   variable and methods naming - `camelCase `
-   file naming - `camelCase.ts` or `camelCase.tsx`
-   using aliases in import paths
-   order of methods declaration inside components

        # inside a component we follow this order

        const Component:FC<> = () => {

        	//hooks declaration

            //other custom user defined functions

            return(){

        	}

        }

-   using aliases in import paths

    -   all top level folders inside `src` are available to us directly in import paths so make use of it instead of using `../` or `../../`

        ```js
        // considering our folder structure above the examples below show the correct/incorrect versions of imports

        //bad
        import form from '../../features/login/component/loginForm.tsx';
        import httpService from '../shared/services/httpService.tsx';

        //good
        import form from 'features/login/component/loginForm.tsx';
        import httpService from 'shared/services/httpService.tsx';
        ```

-   Use redux only wherever necessary. Everything is not meant to be stored in redux. Some examples of things that should not go in redux are
    -   form state
    -   state used for show/hide UI elements for ex. a delete confirmation dialog
    -   constant/static data which will not change during the lifetime of an application until user refreshes the app. Example can be user role based access control permissions etc
    -   [Where to use redux](https://medium.com/@fastphrase/when-to-use-redux-f0aa70b5b1e2) - Some tips about where redux should come into play
-   Instead of using the ternary operator `?` for rendering HTML using `&&` operator

    ```js
    //bad
    {
    	isEnabled ? <h1>I am rendered</h1> : null;
    }

    //good
    {
    	!!isEnabled && <h1>I am rendered</h1>;
    }
    ```

-   code comments wherever necessary along with author name.
