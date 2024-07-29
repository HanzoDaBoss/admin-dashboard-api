# Admin Dashboard API

## A fully functional REST API that provides program content data for Hult EF

All endpoints are handled in `programController.ts`.

`listen.ts` binds the app to the relevant port it can listen for requests on.

`db` directory contains all of the required seeding and local database files.

## Install Dependencies

```zsh
npm install
```

## Databases

Run this script to initialise the local databases

```zsh
npm run setup-dbs
```

To connect to the local databases, run the following commands

```zsh
echo "PGDATABASE = admin_dashboard_test" > .env.test
echo "PGDATABASE = admin_dashboard" > .env.development
```

## Seeding

Run this script to seed the development database

```zsh
npm run seed
```

## Deploy

Run this script to deploy the API locally

```zsh
npm start
```

## Testing

Run this script to test the API endpoints

```zsh
npm t test.ts
```

## Minimum Version Requirements

Node.js: `v21.5.0`

TypeScript: `v5.5.4`

Express: `v4.19.2`

PostgreSQL: `v14.12`
