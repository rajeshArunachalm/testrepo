# Sunny Props - Frontend Application

A Next.js frontend application for real estate property listings that connects to a GraphQL backend API.

## Tech Stack

- **Next.js** 16.0.10
- **React** 19.2.3
- **TypeScript**
- **Apollo Client** for GraphQL
- **App Router** (Next.js 13+)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_GRAPHQL_API_URL=https://sunny-props-backend.toystack.dev/graphql
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Docker Deployment

### Build Docker Image

```bash
docker build -t sunny-props-frontend .
```

### Run Docker Container

```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_GRAPHQL_API_URL=https://sunny-props-backend.toystack.dev/graphql sunny-props-frontend
```

Or using docker-compose (create a `docker-compose.yml`):

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_GRAPHQL_API_URL=https://sunny-props-backend.toystack.dev/graphql
```

Then run:
```bash
docker-compose up
```

## GraphQL Query

The application expects a GraphQL query named `properties` that returns an array of property objects. Adjust the query in `app/page.tsx` to match your backend schema.

Example expected response:
```graphql
{
  properties {
    id
    title
    location
    price
    bedrooms
    bathrooms
    area
    image
  }
}
```

## Port

The application runs on port **3000** by default.

