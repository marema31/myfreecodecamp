#!/usr/bin/env jsvar convert = [
              ['&#39;,&#39;I&#39;,&#39;II&#39;,&#39;III&#39;,&#39;IV&#39;,&#39;V&#39;,&#39;VI&#39;,&#39;VII&#39;,&#39;VIII&#39;,&#39;IX&#39;],
              [&#39;&#39;,&#39;X&#39;,&#39;XX&#39;,&#39;XXX&#39;,&#39;XL&#39;,&#39;L&#39;,&#39;LX&#39;,&#39;LXX&#39;,&#39;LXXX&#39;,&#39;XC&#39;],
              [&#39;&#39;,&#39;C&#39;,&#39;CC&#39;,&#39;CCC&#39;,&#39;CD&#39;,&#39;D&#39;,&#39;DC&#39;,&#39;DCC&#39;,&#39;DCCC&#39;,&#39;CM&#39;],
              [&#39;&#39;,&#39;M&#39;,&#39;MM&#39;,&#39;MMM&#39;]
              ];

function convertToRoman(num) {
 var arr=num.toString().split(&#39;&#39;).reverse();
 var result="";
  for(i=0;i<arr.length;i++){
    result=convert[i][arr[i]]+result;
  }
 return result;
}

convertToRoman(36);

