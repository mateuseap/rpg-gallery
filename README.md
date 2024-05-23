# RPG Gallery

A gallery of RPG worlds and characters made using artificial intelligence!

## Prerequisites
Before getting started, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend.
- [Python](https://www.python.org/) and [virtualenv](https://pypi.org/project/virtualenv/) for the backend.

## Frontend

### Setup and Run

Start by creating a ``.env`` file in the frontend folder. Use the example in [``.env.template``](./frontend/.env.template) file as a guide and add your own settings. Once that's done, install the dependencies and launch the React app:

```bash
# Install the dependecies
npm install

# Run the React app
npm run dev
```

You can then access the application locally at http://localhost:5173/. It automatically refreshes whenever you make changes.

### Deploy

Firstly, build the project and see if there is no errors:

```bash
# Build the project
npm run build
```

After this, you can deploy the frontend by pushing your changes to the `main` branch, then the deploy will be done automatically by Vercel.

## Backend

### Setup and Run

To start off, you'll need to create a virtual environment and install the necessary dependencies:

```bash
# Create and activate the virtual environment
python -m venv venv
source venv/bin/activate

# Install the required dependencies
pip install -r requirements.txt
```

Next, run the Flask server locally:

```bash
# Run the Flask server
flask run --debug --port 5000
```

The backend will be accessible locally at http://localhost:5000. The ``--debug`` flag enables automatic reloading whenever changes are made to the backend code.

### Deploy

The deploy will be automatically done when you update the `main` branch.