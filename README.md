## What problem was I solving

Deployment mp4 to Azure

## What tools did I use and why

NextJs and TypeScript

GitHub and GitHub action

Azure

Firebase

## What did I struggle with and how did I figure it out

Deploying an mp4 file to Azure was my main struggle. When I searched for solutions, I found several possible causes.

File too large:
Azure has default limits on file sizes, and I changed file sizes, but it doesn't works.

Azure blocked certain file types:
Some file types are not served by default.

Solution:

1. Added this in next.comfig.ts

const nextConfig: NextConfig = {
output: "export",

images: {
unoptimized: true,
},
};

2. Added a web.config in Azure App Services with the following.This allowed Azure to recognize and serve the mp4 file correctly.

<staticContent>
  <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
</staticContent>

## Developer memo

- Feature right now

Building a movie page using a movie API.

Install dependencies
Axios - fetch for API requests

Create component and implement fetch movies from TMDb

Display popular movies

Implement liking system in Firebase

Show top 5 popular movies

- Types folder

Use index.ts to keep imports neat and consistent.
(Currently, I only use it for food.ts since I don't import types from multiple files into a single component)
