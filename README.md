# zero-views-youtube-crawler
To make full use of this user-interface, take a look at its python precursor here*: https://github.com/ford-jones/zero-views-youtube-crawler

# get started:
1. Clone the repository:
```
git clone https://github.com/ford-jones/zero-views-yt-frontend.git
```

2. To install the dependencies with npm run:
```
npm install
```

3. To run the build and server scripts use:
```
npm run dev
```

4. To run the Jest testing suite:
```
npm run test
```
Tests will fail if your current IP address is not included in your MongoDB network access list.


5. Note that several returns in the codebase depend on environment variables. Create a .env file in the root of the directory. It should contain the same content as the python projects* config.env file.

Also bare in mind that the player can only fulfill a certain amount of requests per 24 hours. The request limit is based against the quota of your youtube API key. If the player stops functioning, you must await the renewal of your quota to be able to resume work on the project. 
