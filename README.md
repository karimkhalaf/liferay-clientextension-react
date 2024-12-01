#  React Application wrapped as a Liferay extension with Docker Deployment

This repository contains a React application built using **Vite** and converted to be a client extension for liferay. IT contains a **Docker** file to deploy a liferay portal with the extension deployed into it. Follow the instructions below to download, set up, and run the application.

---

## Prerequisites

Make sure you have the following installed on your system:
- [Docker](https://www.docker.com/)

---

## Getting Started

### Step 1: Clone the Repository
Download the repository to your local machine:

```bash
git clone https://github.com/karimkhalaf/liferay-clientextension-react.git
cd liferay-clientextension-react/client-extensions/liferay-clientextension-react
```

### Step 2: Create a .env file
Create a .env file containing the google captcha api sitekey as follows :

```bash
VITE_REACT_APP_SITE_KEY = {sitekey}
```
### Step 3: Build the client extension with gradlew :

```bash
../../gradlew build
```

### Step 4: Build the docker image : 

```bash
docker build -t liferay-clientextension-react ../..
 ```

### Step 4: Run the docker container :

```bash
docker run -dp 8080:8080 liferay-clientextension-react
 ```
