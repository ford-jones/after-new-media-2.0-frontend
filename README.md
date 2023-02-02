# zero-views-youtube-crawler
To make full use of this user-interface, take a look at its python precursor here*: https://github.com/ford-jones/zero-views-youtube-crawler

# get started:
1. After cloning down the project, install the package dependencies with:
```
npm install
```

2. To run the build and server scripts use:
```
npm run dev
```

3. Note that several returns in the codebase depend on environment variables. Create a .env file in the root of the directory. It should contain the same variables as the python projects* config.env file.

Also bare in mind that the player can only fulfill a certain amount of requests per 24 hours. The request limit is based against the quota of your youtube API key. If the player stops functioning, you must await the renewal of your quota to resume work on the project. 
