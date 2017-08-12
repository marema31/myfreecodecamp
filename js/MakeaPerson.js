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
  this.getFullName=function(){ return firstName+' &#39;+lastName;};

  this.setFullName(firstAndLast);
  return firstAndLast;
};

var bob = new Person(&#39;Bob Ross&#39;);
bob.getFirstName();

