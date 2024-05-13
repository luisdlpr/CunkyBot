# Cunky Discord Bot

An open-source, multi-purpose discord bot!

# Discord Bot Setup

1. Follow step 1 of the discord app
   (getting-started)[https://discord.com/developers/docs/quick-start/getting-started] guide.
2. Note down your Bot Token for the next step.

# Dev Setup

## Dependencies:

- Node 18

## Instructions:

1. Fill out `.env.sample` with your credentials and save under `.env`.
2. Run `npm install` in the base project directory.

## Dev Commands

```
    "dev": Compile and run the bot,
    "build": Compile the bot to dist/,
    "preview": Run the compiled code in dist/,
    "lint": Lint your src code,
    "format": Format your src code,
    "test": Test your src code (run tests under src/tests)
```

## CI/CD

Linting, Testing, and Automated Deployment are done through a Jenkins pipeline. The Jenkinsfile can
be seen in the root of the repository. This can be copied and set up on your own server for a
similar setup!
