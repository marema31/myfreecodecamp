#!/usr/bin/env js
function flat(data) {
  return data.reduce((r, e) => Array.isArray(e) ? r = r.concat(flat(e)) : r.push(e) && r, [])
}

function permArray(base,left) {
  if (left.length<=0) {
    return base.join("");
  }
  else
  {
    var perms=[];

    for(var i=0;i<left.length;i++)
    {
      var tmpBase= base.slice();
      tmpBase.push(left[i]);
      var tmpLeft=left.slice();
      tmpLeft.splice(i,1);
      var tmpPerms=permArray(tmpBase,tmpLeft);
        perms.push(tmpPerms);              
    }
    return flat(perms);
  }
}

function permAlone(str) {
  var perms=permArray([],str.split(""));
  var numPerm=0;
  for (var i=0;i<perms.length;i++){
    var noDouble=true;
    for(var j=0;j<perms[i].length-1;j++){
      if(perms[i][j]==perms[i][j+1]){
        noDouble=false;
      }
    }
    if(noDouble===true){
      numPerm++;
    }
  }
  return numPerm;
}

permAlone('aab');

