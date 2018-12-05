// set requirements & import analyze
const fs = require('fs');
const getJSON = require('get-json');

// declare variables
let page = 1;
let pageLength = 0;
let dataArray = [];
let urlBase = 'https://thejoustingpavilion.com/api/v3/games?page='

// check if data.json is populated
fs.readFile('./data.json', 'utf-8', function(err, rawdata){
  if(err){
    console.log(err);
    checkTJP(urlBase, page, pageLength);
  }
  else{
    dataArray = JSON.parse(rawdata);
    page = dataArray.shift();
    pageLength = dataArray.shift();
    console.log(dataArray);
    console.log('page: ' + page);
    console.log('length: ' + pageLength);
    checkTJP(urlBase, page, pageLength);
  }
});

// declare function
function checkTJP(url, page, pageLength){
  getJSON(url + page, function(err, data){
    console.log(page);
    if(data.length != pageLength){
      for(var i = pageLength; i < data.length; i++){
        dataArray.push(data[i]);
      }
      if(data.length == 50){
        page++;
        pageLength = 0;
        checkTJP(urlBase, page, pageLength);
      }
      else{
        pageLength = data.length;
        dataArray.unshift(pageLength);
        dataArray.unshift(page);
        fs.writeFile('data.json', JSON.stringify(dataArray), function(err){
          if(err) throw err;
          console.log('saved');
          const analyze = require('./analyze_games.js')
        });
      }
    }
  });
}
