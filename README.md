# github-api-demo

App with GitHub API using React, Redux, Redux-Thunk, Typescript and Material-UI

### Get github OAuth token
1. Login to github
2. Go to account Settings/Developer settings/OAuth Apps
3. Create New OAuth App
4. Find Client ID and Client Secret 


## Getting Started
1. Clone this repository and install the node dependecies with:
    ```
    npm install
    ```    
2. Set up environment variables (accepts `.env` file) from previous step 
    ```
    CLIENT_ID=####
    CLIENT_SECRET=####
    ```
3. Run development server with:
    ```
    scripts start
    ```

### Scripts
- `scripts start` Compiles and hot-reloads for development
- `scripts build` Compiles and minifies for production
- `scripts test` Compiles and hot-reloads for test
