# Running a React Project

This guide explains how to run a React project in VS Code, starting from cloning a GitHub repository to launching the app in a browser.

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (which includes npm).
2. Install Git from [git-scm.com](https://git-scm.com/).
3. Install VS Code from [code.visualstudio.com](https://code.visualstudio.com/).

## Steps to Run the Project

### 1. Clone the Repository

1. Open VS Code.
2. Open the Terminal in VS Code.
3. Navigate to the folder where you want to clone the project:
   ```bash
   cd <desired-folder>
   ```
  
4. Clone the repository using Git:
   ```bash
   git clone git@github.com:Md-Solaiman-Ovi/softnio-assignment-react-version.git
   ```
   

### 2. Navigate to the Project Directory

Move into the cloned project folder:
```bash
cd softnio-assignment-react-version
```


### 3. Install Dependencies

Run the following command to install the required dependencies:
```bash
pnpm install
```
This will download and set up all the libraries and modules listed in the `package.json` file.

### 4. Start the Development Server

Start the React development server by running:
```bash
pnpm run dev
```
This will open the project in your default web browser at `http://localhost:3000`.

### 5. View Live Changes

- Open the project files in VS Code.
- Make changes to the code (e.g., in the `src` folder).
- The browser will automatically refresh to reflect your changes.
