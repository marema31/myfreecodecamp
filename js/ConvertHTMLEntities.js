#!/usr/bin/env js
function convertHTML(str) {
  // &colon;&rpar;
  str=str.replace(/&/g,"&amp;");
  str=str.replace(/"/g,"&quot;");
  str=str.replace(/'/g,"&apos;");
  str=str.replace(/</g,"&lt;");
  str=str.replace(/>/g,"&gt;");
  return str;
}

convertHTML("Dolce & Gabbana");

