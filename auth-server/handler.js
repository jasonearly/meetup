"use strict";

const axios = require("axios");

module.exports.getAccessToken = async event => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=2oos1uv203dg8eq4lspekauprq" +
    "&client_secret=p9uc4tklmb8ilq4us2dqfcjbsq" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://jasonearly.com/meetup/" +
    // + "&code=https://secure.meetup.com/oauth2/authorize?client_id=2oos1uv203dg8eq4lspekauprq&response_type=code&redirect_uri=https://jasonearly.com/meetup/"
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    })
  };
};

module.exports.refreshAccessToken = async event => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=2oos1uv203dg8eq4lspekauprq" +
    "&client_secret=p9uc4tklmb8ilq4us2dqfcjbsq" +
    "&grant_type=refresh_token" +
    "&refresh_token=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    })
  };
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
//};
