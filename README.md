# Reboot Online Brochure

## Pull the Changes

First, pull the changes from this repository by navigating to the application directory in `Git Bash` and entering the following command:

```
git pull
```

## Running the Application

### Update the .npmrc file

First, we need to update the `.npmrc` file to correct the `Nexus` registry URLs.

In `Git Bash`, navigate to the `~` directory:

```
cd ~
```

Open the `.npmrc` file:

```
nano .npmrc
```

Replace the contents of the file with the following:

```
registry=https://nexus3.devops.lloydsbanking.com/repository/npm-proxy/
@babel:registry=https://nexus3.devops.lloydsbanking.com/repository/npm-proxy/
strict-ssl=false
```

Hit `Ctrl` + `X` to exit, then `Y` to confirm and then press `Enter` to save the changes.

> [!NOTE]
> If you think this is complicated, you don't want to go anywhere near `vim`.

### Install the dependencies

In the terminal, navigate back to the application directory.

Before we install the dependencies, we first need to clean `npm`'s cache:

```
npm cache clean --force
```

Then, enter the following command to install the application's dependencies:

```
npm i --legacy-peer-deps
```

There will be a lot of warnings, but hopefully all the packages should install successfully.

### Run the application

Finally, enter the following command to run the application:

```
npm run dev
```

Once the app compiles, hit `h` + `enter`, then `o` + `enter` to open the application in the browser.

And that's all! Happy coding :)

## Template

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
"# eventrox" 
