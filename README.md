# 🧙‍♂️ RPG Gallery

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/rpg-gallery)
![Render Deploy](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status-latest-ug62.onrender.com%2Fsrv-cp7sfpkf7o1s73ekk6n0%3Fkey%3DZn7J-8K0wS4&query=%24.status&style=flat&logo=Render&label=Render)

A gallery of RPG worlds and characters made using artificial intelligence!

## 🚀 Prerequisites
Before getting started, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend.
- [Python](https://www.python.org/) and [virtualenv](https://pypi.org/project/virtualenv/) for the backend.

## 🎨 Frontend

### 🛠️ Setup and Run

Start by creating a ``.env`` file in the frontend folder. Use the example in [``.env.template``](./frontend/.env.template) file as a guide and add your own settings. Once that's done, install the dependencies and launch the React app:

```bash
# Install the dependecies
npm install

# Run the React app
npm run dev
```

You can then access the application locally at http://localhost:5173/. It automatically refreshes whenever you make changes.

### 🌐 Deploy

Firstly, build the project and see if there is no errors:

```bash
# Build the project
npm run build
```

After this, you can deploy the frontend by pushing your changes to the `main` branch, then the deploy will be done automatically by Vercel.

Available at: https://rpg-gallery.vercel.app

## 🔧 Backend

### 🛠️ Setup and Run

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

### 🌐 Deploy

The deploy will be automatically done by Render when you update the `main` branch.

Available at: https://rpg-gallery.onrender.com 


## 📋 Postmortem Report

1. **Major challenges, mistakes, and lessons learned**
    - Curating content for the gallery website:
        - Mistake: Initially, we included too many items without a clear selection criteria, leading to an overcrowded and confusing gallery.
        - Lesson learned: Establish clear guidelines and criteria for what content should be showcased to maintain quality and coherence.
    - Defining and standardizing the initial line of work:
        - Mistake: Lack of initial standardization resulted in inconsistent work formats and styles.
        - Lesson learned: Create and communicate clear standards and templates at the beginning of the project to ensure consistency.
    - Filtering the results from the AIs

2. **Group work division**
    - Creation and documentation of RPG Worlds, characters, and related content:
        - Brenda (Aetheris)
        - Camila (Calgar)
        - Felipe (Valoria)
        - José (Runeterra)
        - Mateus (Elysium and Elaria - The Shattered Realms)
        - Rafael (Neo-Recife and Recife 2099: Neon e Sombras)
    - Gallery website: Mateus

3. **Architecture and Technologies Used**
    - [React](https://react.dev/)
    - [Flask](https://flask.palletsprojects.com/en/3.0.x/)
    - [Vercel](https://vercel.com/)
    - [Render](https://render.com/)
    - [GitHub](https://github.com/)
    - Various generative AI

## 👥 Group

- [Brenda Guerra (bvga)](https://github.com/Brenda-Guerra)
- [Camila Vieira (cbv2)](https://github.com/camilab-vieira)
- [Felipe Tabosa (fbt2)](https://github.com/FelipeTbs)
- [José Vinicius (jvss2)](https://github.com/josevinicius1209)
- [Mateus Elias (meap)](https://github.com/mateuseap)
- [Rafael Labio (rrl3)](https://github.com/RafaelRL3)
