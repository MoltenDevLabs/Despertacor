# Project minimal starter

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

#.env
Create a .env file with Supabase info:
SUPABASE_URL= "https://someUrl.supabase.co"
SUPABASE_KEY= "someKey"

------------------------------------------------------------------

## Deploy on netlify setup

# package.json
"scripts": {
    	"predeploy": "npm run build"
}

# netlify.toml
Create a netlify.toml and paste code below

[build]
  command = "npm run generate"
  publish = "dist"

------------------------------------------------------------------

## If there's supasabe in the project

# nuxt.config.ts
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
    },
    private: {
      supabaseKey: process.env.SUPABASE_KEY,
    },
  }
```
