#//usr/bin/env bash
USER=marema31
curl -s  https://www.freecodecamp.org/$USER|pup 'table tbody tr td:nth-child(4) a attr{href}' |perl -ne 'next unless m/^\/challenges\//;($n,$s)=split(/\?/);$n=~ s/\s//g;$n=~s/\/challenges\///;$s=~s/solution=//;$s=~s/%([A-Fa-f\d]{2})/chr hex $1/eg;$s=~s/fccss/<script>/;$s=~s/fcces/<\/script>/;$s=~s/&#39\;/'"'"'/;$e="js";$e="html" if $s=~/^\s*</;open(FIC,">$n.$e");print FIC "#!/usr/bin/env js" if $e=="js";print FIC "$s";close FIC'
