Website Boilerplate
----

[![Build Status](https://travis-ci.org/garciadiazjaime/website-notable.svg)](https://travis-ci.org/garciadiazjaime/website-notable)

Run project:
----
a) let's install all packages:

`npm install`

b) let's run dev server

`npm run dev`

By default server will run on http://127.0.0.1:8080/

Note: `npm run sprites` requires 'sass'
http://sass-lang.com/install

Deploy project
`npm run update`
`git status`
`git diff`
`npm run deploy`

Docker Commands
====

docker build -t garciadiazjaime/website-notable .
docker run -e "API_URL=http://45.55.12.200:49179/" -d -p 49172:3072 garciadiazjaime/website-notable
docker push garciadiazjaime/website-notable
docker pull garciadiazjaime/website-notable

Code to increase jslint max line length limit
/* eslint max-len: [2, 500, 4] */
