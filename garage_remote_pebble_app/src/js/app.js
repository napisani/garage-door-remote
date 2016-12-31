/**
 * Nick Pisani 12/31/2016
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Garage Remote',
  icon: 'images/favicon_small.png',
//   subtitle: 'Select a Door',
//   body: 'Press any button.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

var displayMenu = function(e) {

  var doorList = [{
    title: 'Door Number 1',
    icon: 'images/favicon_small_er.png',
    subtitle: 'Toggle'
  }, {
    title: 'Door Number 2',
    icon: 'images/favicon_small_er.png',
    subtitle: 'Toggle'
  }, {
    title: 'Door Number 3',
    icon: 'images/favicon_small_er.png',
    subtitle: 'Toggle'
  }];
  var menu = new UI.Menu({
    sections: [{
      items: doorList
    }]
  });
  
  var doToggle = function(index) {
    var method = 'GET';
    var url = 'http://192.168.1.250:8080/door/' + (1 + index);
    
    // Create the request
    var request = new XMLHttpRequest();
    
    // Specify the callback for when the request is completed
    request.addEventListener("load", function(){
      console.log("200");
      menu.item(0, index, { 
        title: 'Door Number ' + (index + 1), 
        icon: 'images/favicon_small_er.png',
        subtitle: 'Success :)',                    
      });
    });
    request.addEventListener("error", function(){
      console.log("fail");
      menu.item(0, index, { 
        title: 'Door Number ' + (index + 1), 
        icon: 'images/favicon_small_er.png',
        subtitle: 'Epic fail :(',                    
      });
    });
    
    // Send the request
    request.open(method, url);
    console.log("sending request");
    request.send();
  };
  
 
  
  var justSelected = -1;
  var reset = function() {
    var x = 0;
    for(x = 0; x < 3; x ++) {
      menu.item(0,  x, { 
        title: 'Door Number ' + (x + 1), 
        icon: 'images/favicon_small_er.png',
        subtitle: 'Toggle',                    
      });
    }
    justSelected = -1;
  };
  menu.on('up', reset);
  menu.on('down', reset);
  menu.on('select', function(e) {
    var index = e.itemIndex;
    if(justSelected === index){
      doToggle(index);
    } else {
      menu.item(0, index, { 
        title: 'Door Number ' + (index + 1), 
        icon: 'images/favicon_small_er.png',
        subtitle: 'Are you sure?',                    
      });
      justSelected = e.itemIndex;    
    }
  });
  menu.show();
};


main.on('click', 'select', displayMenu);
main.on('click', 'up', displayMenu);
main.on('click', 'down', displayMenu);