## Project Title:

Coral Mussòlidaria Reus

## Project Description:

This project is a web app for the use of the members of the Coral Mussolidària Reus,
a place where every participant can easily find all the resources needed to focus on singing, enjoying and sharing
rather than spending time searching for lyrics, photos of old events and such.

## Tech Stack:

This project makes use of:

- HTML5 as the markup language
- Tailwind as the styling tool
- Nuxt 3 as the framework
- Supabase as the backend
- Netlify for deploying

## Installation & Setup:

# Project minimal starter

# npm

npm install

# .env

Create a .env file with Supabase info:
SUPABASE_URL= "https://someUrl.supabase.co"
SUPABASE_KEY= "someKey"

---

## Deploy on netlify setup

# package.json

"scripts": {
"predeploy": "npm run build"
}

# netlify.toml

Create a netlify.toml file and include the code below

[build]
command = "npm run generate"
publish = "dist"

---

## If there's supabase in the project

# nuxt.config.ts

Add the following code to the nuxt.config.ts file

runtimeConfig: {
public: {
supabaseUrl: process.env.SUPABASE_URL,
},
private: {
supabaseKey: process.env.SUPABASE_KEY,
},
}

```

```
