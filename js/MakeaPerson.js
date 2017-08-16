#!/usr/bin/env js

var Person = function(firstAndLast) {
  var firstName;
  var lastName;
  this.setFullName=function(firstAndLast){
    var v=firstAndLast.split(/\s+/); 
    firstName=v[0];
    lastName=v[1];   
  };
  this.setFirstName=function(first){ firstName=first; };
  this.setLastName=function(last){   lastName=last; };
  this.getFirstName=function(){return firstName;};
  this.getLastName=function(){ return lastName;};
  this.getFullName=function(){ return firstName+' '+lastName;};

  this.setFullName(firstAndLast);
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFirstName();

