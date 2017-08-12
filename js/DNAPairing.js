#!/usr/bin/env jsvar pairs={
           'A&#39;: &#39;T&#39;,
           &#39;T&#39;: &#39;A&#39;,
           &#39;C&#39;: &#39;G&#39;,
           &#39;G&#39;: &#39;C&#39;,
          };

function pairElement(str) {
  return str.split(&#39;&#39;).map(function(val){
    return [val,pairs[val]];
  });
}

pairElement("GCG");

