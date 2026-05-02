🎓 Tashfiq Portfolio — React + Vite
Lab Assignment 5 — Converting a multi-page HTML/CSS/JS portfolio into a React Single Page Application (SPA)

Student: Tashfiq Mahmud Niloy
ID: 2221080642
Dept: ECE | Major: CSE
Branch: lab5-react
Repo: https://github.com/TashfiqMahmud/Portfolio-Tashfiq-ECE


🚀 Getting Started
Prerequisites

Node.js ≥ 18 → nodejs.org
Git installed

Installation & Run
bash# 1. Clone the repo
git clone https://github.com/TashfiqMahmud/Portfolio-Tashfiq-ECE.git

# 2. Switch to the React branch
git checkout lab5-react

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
Open http://localhost:5173 in your browser.

📁 Project Structure
tashfiq-portfolio-react/
├── public/                  # Static assets
│   ├── profile.jpg          # Profile photo
│   ├── intro.mp3            # Audio introduction
│   └── demo.mp4             # Project demo video
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Alert.jsx        # Toast notification
│   │   ├── Button.jsx       # Reusable button
│   │   ├── ContactForm.jsx  # Form with validation
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── ProjectCard.jsx  # Project card
│   ├── layouts/
│   │   └── MainLayout.jsx   # Page wrapper with Navbar
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Projects.jsx     # Projects page
│   │   ├── Education.jsx    # Education page
│   │   └── Contact.jsx      # Contact page
│   ├── App.jsx              # Root component
│   ├── index.css            # Global styles + CSS variables
│   └── main.jsx             # React DOM entry point
├── index.html               # Vite HTML entry
├── package.json
└── vite.config.js

✅ Assignment Requirements Checklist
#RequirementImplementation1Create Vite React project, install & runpackage.json, vite.config.js, npm run dev2Clean default App.jsx and index.cssBoth files rewritten from scratch3Folder structure: components, pages, layouts✅ All three folders created under src/4Reusable components: Navbar, Cards, Buttons, FormNavbar.jsx, ProjectCard.jsx, Button.jsx, ContactForm.jsx5Replace DOM manipulation with useState + propsZero document.getElementById — all state-driven6Dynamic text updates using React stateTime-based greeting in Home.jsx, theme icon in Navbar.jsx7Style changes using conditional class renderingtheme-dark class toggled via state, active nav link via state8Add/remove elements using state arraysAdd & remove projects in Projects.jsx9onClick, onSubmit, form validationAll buttons use onClick, forms use onSubmit with validation10Dark/Light toggle, show/hide sections, alertsTheme toggle in Navbar, bio/skills/courses toggles, global toast alerts11Controlled inputs, instant validation feedbackContactForm.jsx — every field validated on blur & change12Modular, reusable, props-driven componentsAll components accept props, no repeated markup13All components combined in Home, rendered from App.jsxApp.jsx → MainLayout → Home/About/Projects/Education/Contact

🔄 What Changed from Previous Labs
Old (Labs 1–4)New (Lab 5 — React)index.html, about.html etc.Single index.html + JSX pagesscript.js DOM manipulationuseState hooks in JSX componentsstyle.csssrc/index.css with CSS variablesBootstrap JS (modals, collapse)React conditional renderingMulti-page navigation via <a href>State-based page switchinglocalStorage theme scriptuseEffect + state in App.jsx

🌟 Features

🌙 Dark / Light mode toggle with persistence
👤 Profile photo with bio show/hide toggle
⏰ Dynamic greeting based on time of day
🎬 Project demo video player
🎙 Audio introduction player
➕ Add / Remove projects dynamically
✅ Contact form with real-time validation
📱 Responsive layout using Bootstrap grid
🔔 Toast alerts for all user interactions


📦 Tech Stack

React 18
Vite 5
Bootstrap 5.3
CSS Variables for theming
