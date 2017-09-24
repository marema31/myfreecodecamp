var joueur = 'X';
var gagnant = [ 
                [1,2,3],
                [4,5,6],
                [7,8,9],
                [1,4,7],
                [2,5,8],
                [3,6,9],
                [1,5,9],
                [3,5,7],
              ];


var fini = false;
var nbcoups = 0;
var score = { 'X':0, 'O':0, 'nul':0}

function afficherScore(gagnant)
{
    score[gagnant]++;
    $("#X").html(score['X']);
    $("#O").html(score['O']);
    $("#nul").html(score['nul']);
}

function rejouer()
{
  $("#info").hide();
  nbcoups=0;
  fini=false;
  for(var i=1;i<10;i++)
  {
    $("#"+i).html("");
  }
  for(var i=0;i<8;i++)
  {
    $("#line"+i).hide();
  }
  $("#info").removeClass("perdu");
  $("#info").removeClass("gagne"); 
  $("#info").removeClass("nul"); 
  if(joueur=='O')
  {
    jouer(iaJouer('O'));      
  }
}

function matchNul()
{
  if(nbcoups>=9)
  {
    $("#info").addClass("nul");
    $("#info").html("Match nul");
    $("#info").show();
    fini=true;
    afficherScore('nul');
  }
  return fini;
}


function contenu(index)
{
    return $("#"+index).html()
}

function matchGagnant()
{
    for(var i=0;i<gagnant.length;i++)
    { 
      var case0=contenu(gagnant[i][0]);
      var case1=contenu(gagnant[i][1]);
      var case2=contenu(gagnant[i][2]);
      
      if( case0 != "" && case0 == case1 && case0 == case2 )
      {
        $("#info").addClass("gagne");
        $("#info").html(case0+" gagne");
        $("#line"+i).show();
        $("#info").show();
        fini=true;
        afficherScore(case0);
      }
    }
    return fini;
}

function premierVide(cases)
{
  for(var i=0;i<cases.length;i++)
  {
    if(contenu(cases[i])=='')
    {
      return cases[i];
    }
  }
  return -1;
}
/* return:
  'N' : ligne pleine
  '': vide ou un seul caractere ou deux differents
  'X' ou 'O' : caractere manquant pour gagner
*/
function candidat(cases)
{
   var case0=contenu(cases[0]);
   var case1=contenu(cases[1]);
   var case2=contenu(cases[2]);
   if(case0 != '' && case1 != '' && case2 != '' )
   {
     return 'N';
   }
   if(case0 == case1 )
   {
     return case0;
       
   }  
   if(case0 == case2 )
   {
     return case0;
       
   }  
   if(case1 == case2 )
   {
     return case1;
   }  
   return '';
}

function jouer(caseJouee)
{
  if(fini)
  {
    rejouer();
    return;
  }
  if(contenu(caseJouee) != "")
  {
    return;
  }
  nbcoups++;
  $("#"+caseJouee).html(joueur);
  joueur= joueur=='X'?'O':'X';

  matchGagnant();
  matchNul();
  if(joueur=='O' && ! fini)
  {
      jouer(iaJouer('O'));      
  }
}

function iaJouer(symbole)
{
  console.log('Je dois jouer')
  var adversaire=  symbole=='X'?'O':'X';
  var aBloquer=[];
  var caseAJouer;
  for(var i=0;i<8;i++)
  {
    var val=candidat(gagnant[i]);
    console.log('Je teste la combinaison'+ gagnant[i]+' et la reponse est'+val);
    if(val==symbole)
    {
      caseAJouer = premierVide(gagnant[i]);
      console.log('Je vais jouer un coup gagnant avec '+caseAJouer);
      return caseAJouer;
    }
    if(val==adversaire)
    {
      aBloquer.push(i);
    }
  }

  if(aBloquer.length!=0)
  {
      var combinaison=aBloquer.pop();
      console.log('il faut bloquer sur la combinaison'+combinaison);
      caseAJouer = premierVide(gagnant[combinaison]);
      console.log('Je vais jouer un coup bloquant avec '+caseAJouer);
      return caseAJouer;    
  }

  if(contenu(5)=='')
  {
    console.log('Je vais jouer au milieu ');
    return 5;
  }

  caseAJouer=premierVide([1,3,7,9].sort(function() { return .5 - Math.random(); }));
  if (caseAJouer == -1)
  {
    caseAJouer=premierVide([2,4,6,8].sort(function() { return .5 - Math.random(); }));
  }
  console.log('Je vais jouer au  '+caseAJouer);
  return caseAJouer
}


$(document).ready(function() 
{
  
  $('td').click(function() 
  { 
    if(fini){
      rejouer();
    }
    else if(joueur=='X')
    {
      jouer($(this).attr("id"));  
    }
  });
  
  $('#info').click(rejouer);
});