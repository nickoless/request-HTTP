var request = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    throw err;
  })

  .on('response', function(response){
    console.log('Downloading image... ', response.statusMessage , response.headers['content-type']);
  })

  .on('end', function(end){
    console.log('Download complete.');
  })



  .pipe(fs.createWriteStream('./future.jpg'));

  // console.log('Download complete.');
