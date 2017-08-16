#//usr/bin/env bash
USER=marema31
curl -s  https://www.freecodecamp.org/$USER \
  |pup 'table tbody tr td:nth-child(4) a attr{href}' \
  | perl -ne 'next unless m/^\/challenges\//;
     ($name,$solution)=split(/\?/);
     $name =~ s/\s//g;
     $name =~ s/\/challenges\///;
     $solution =~ s/solution=//;
     $solution =~ s/%([A-Fa-f\d]{2})/chr hex $1/eg;
     $solution =~ s/fccss/<script>/;
     $solution =~ s/fcces/<\/script>/;
     $solution =~ s/&#39\;/'"'"'/g;
     if($solution =~ /^\s*</)
     {
       $ext="html";
       $shebang="";
     }
     else
     {
       $ext="js";
       $shebang="#!/usr/bin/env js\n";
     }
     print "$name.$js\n";
     open(FIC,">$ext/$name.$ext");
     print FIC $shebang;
     print FIC "$solution";
     close FIC'
