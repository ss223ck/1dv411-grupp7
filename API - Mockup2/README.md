# API Mockup v2.0

## Instructions
To start this API example, run the code snippet below in the console window, while located in the same level as the server.js

The location of the server url should be presented in the window.
<pre>$ node server.js</pre>

## Get a single user
Returns the requested user back if found.
<pre>
GET /users/:username
GET /users/thajo
</pre>

#### Response
<pre>Status: 200 OK</pre>
<pre>
{
  "city": "Kalmar",
  "created": "2015-08-27T12:47:56.042Z",
  "firstname": "John",
  "lastname": "Häggerud",
  "program": "staff",
  "services": {
    "github": "thajo"
  },
  "studentType": "campus",
  "username": "thajo"
}
</pre>

## Get multiple users
Each username is seperated by a "+" symbol. Returns a list with "matched" users. If all fails, an empty array is returned.
<pre>
GET /users/:username+:username+:username
GET /users/tstjo+thajo+mats
</pre>

#### Response
<pre>Status: 200 OK</pre>
<pre>
[
  {
    "city": "Kalmar",
    "created": "2015-08-27T12:41:36.251Z",
    "firstname": "Johan",
    "lastname": "Leitet",
    "program": "staff",
    "services": {
      "github": "Leitet"
    },
    "studentType": "campus",
    "username": "tstjo"
  },
  {
    "city": "Kalmar",
    "created": "2015-08-27T12:47:56.042Z",
    "firstname": "John",
    "lastname": "Häggerud",
    "program": "staff",
    "services": {
      "github": "thajo"
    },
    "studentType": "campus",
    "username": "thajo"
  },
  {
    "created": "2015-08-27T13:33:33.607Z",
    "username": "mats",
    "firstname": "Mats",
    "lastname": "Loock",
    "studentType": "campus",
    "program": "staff",
    "city": "Kalmar",
    "services": {
      "github": "mtslck"
    }
  },
]
</pre>

## Get all users
<pre>GET /users</pre>

#### Response
<pre>Status: 200 OK</pre>
<pre>
[
  {
    "city": "Kalmar",
    "created": "2015-08-27T12:41:36.251Z",
    "firstname": "Johan",
    "lastname": "Leitet",
    "program": "staff",
    "services": {
      "github": "Leitet"
    },
    "studentType": "campus",
    "username": "tstjo"
  },
  {
    "city": "Kalmar",
    "created": "2015-08-27T12:47:56.042Z",
    "firstname": "John",
    "lastname": "Häggerud",
    "program": "staff",
    "services": {
      "github": "thajo"
    },
    "studentType": "campus",
    "username": "thajo"
  },
  {
    "created": "2015-08-27T13:33:33.607Z",
    "username": "mats",
    "firstname": "Mats",
    "lastname": "Loock",
    "studentType": "campus",
    "program": "staff",
    "city": "Kalmar",
    "services": {
      "github": "mtslck"
    }
  },
  {
    "created": "2015-08-27T15:42:03.366Z",
    "username": "xx222xx",
    "firstname": "Harry",
    "lastname": "Potter",
    "studentType": "distance",
    "program": "WP2015",
    "city": "London",
    "services": {
      "github": "harry_potter_fake"
    }
  }
]
</pre>
