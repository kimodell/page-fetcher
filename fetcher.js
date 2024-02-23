//implment a node app that takes two command line args(a URL and a local file path) and downloads the resource at the URL to the local path

//commandline input
//node fetcher.js http://www.example.edu/ ./index.html

//require node fs
const fs = require('fs');

//create variables to store command line args as strings
const url = `${process.argv.slice(2)}`;
const localPath = `${process.argv.slice(3)}`;

//use the request library to make the HTTP request and obtain the required data
const request = require('request');
request(url, (error, response, body) => {
  if (error) {
    // Print the error if one occurred
    console.log('error:', error);
    return "error";
  } else {
    // Print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);
    //use Node's file writing system to store the requested data in the desired location
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.error(err);
      } else {
        // display message when file is written succesfully, including the aamount of bytes and where it was stored
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
      }
    });
  }
});


