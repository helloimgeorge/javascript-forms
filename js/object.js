"use strict";

var person = { // create object
    name: 'felix',
    sayHello: function() { //sayHello is the key and give function
        return 'Hello ' + this.name; // return this value and pass it to le
    }
};

console.log(person.name);
person.name = 'Dave';
person.coolnessFactor = 49;
person.reportCoolness = function () {
    if (this.coolnessFactor > 50) {
        console.log('very cool!');
    }
    else {
        console.log('total nerd!');
    }
};

console.log(person.sayHello()); //
person.reportCoolness();
person.coolnessFactor = 22;