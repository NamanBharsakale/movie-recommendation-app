# 🎬 Movie Recommendation App

A **Movie Recommendation Web App** built using **HTML, CSS, and JavaScript**, deployed on **Vercel** with secure API handling.  
Users can **search movies**, **filter by genre, time period, and style**, and view detailed movie information from the **OMDb API** — without exposing the API key.

---

## 🚀 Features

- 🔍 **Search Movies** instantly  
- 🎭 **Filter Options**: Genre, Year, Style  
- 📖 **Detailed View** with movie info (poster, plot, ratings, etc.)  
- 🎨 **Responsive UI** with modular CSS (`style.css`, `components.css`, `responsive.css`)  
- 🔒 **API key security** using `.env` + Vercel Serverless Functions (`/api`)  

---

## 📂 Project Structure

movie-recommendation-app/
│── api/ # Serverless functions (secure API calls)
│ ├── movies.js
│ └── movieDetails.js
│
│── assets/ # Static assets (images, icons, etc.)
│
│── css/ # Stylesheets
│ ├── style.css
│ ├── components.css
│ └── responsive.css
│
│── js/ # JavaScript logic
│ ├── api.js
│ ├── app.js
│ └── filters.js
│
│── index.html # Main entry point
│── .env # Environment variables (API key, ignored in git)
│── .gitignore # Files to ignore in git
│── package.json # Dependencies & scripts
│── README.md # Documentation


---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/movie-recommendation-app.git
   cd movie-recommendation-app
Install dependencies (for serverless functions / deployment)


npm install
Set up environment variables
Create a .env file in the root directory:


OMDB_API_KEY=your_api_key_here
Run locally using Vercel CLI


vercel dev
Then open 👉 http://localhost:3000

🌍 Deployment (Vercel)
Push project to GitHub

Import repo into Vercel

In Project Settings → Environment Variables, add:

OMDB_API_KEY=your_api_key_here
Deploy 🎉


🛠️ Built With
HTML5 – Structure

CSS3 – Styling

JavaScript (ES6) – Functionality

OMDb API – Movie database

Vercel – Hosting + Serverless Functions