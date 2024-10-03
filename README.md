# Coral Despertacor Mobile App

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation-and-setup)
  - [Project Minimal Starter](#project-minimal-starter)
  - [Deploy on Netlify Setup](#deploy-on-netlify-setup)

## Project Overview

Welcome to the Coral Despertacor Mobile App project. This app is tailored to the members of the Coral Mussolidària Reus community, providing an effortless way for participants to access all resources necessary for a delightful singing and sharing experience. Say goodbye to the hassle of searching for lyrics, event photos, and more. This app is designed to enrich your involvement in the community.

## Tech Stack

The project leverages a cutting-edge tech stack to deliver a seamless and feature-rich experience. Here are the key technologies used:

- **HTML5:** The foundational markup language ensuring a modern and robust app structure.
- **Tailwind CSS:** A powerful styling tool that adds elegance and responsiveness to the app's design, enhancing user experience.
- **Vue and Nuxt 3:** Dynamic JavaScript frameworks that provide flexibility, interactivity, and speed, resulting in a seamless and engaging user interface.
- **Netlify:** The chosen deployment platform, known for its efficiency and hassle-free delivery of the app to users.

## Installation & Setup

To get started with the Coral Despertacor Mobile App, follow these setup instructions.

### Project Minimal Starter

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Deploy on netlify setup

Update your package.json with the following script for Netlify deployment:

```bash
"scripts": {
  "predeploy": "npm run build"
}
```

Create a netlify.toml file and include the following code:

```bash
[build]
  command = "npm run generate"
  publish = "dist"
```

With these steps, you'll be well-prepared to run and deploy the Coral Despertacor Mobile App.
