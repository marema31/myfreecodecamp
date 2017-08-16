function calcul(total,operation,operande)
{
  if(operation=='' )
  {
    return operande;
  }
  if(operation== '=')
  {
    return total;
  }
  var val;
  if(operande.indexOf(".")==-1)
  {
    val= parseInt(operande,10);
  }
  else
  {
    decimal=true;
    val= parseFloat(operande);
  }
  if(operation=='/')
  {
    total/=val;
  }
  else if(operation=='*')
  {
    total*=val;
  }
  else if(operation=='-')
  {
    total-=val;
  }
  else if(operation=="+")
  { 
    total-=-val;  // To avoid string concatenation !!!!
  }
  if(total%1!=0)
  {
     total=Math.round(total*100)/100;
  }
  return total;
}


$(document).ready(function() 
{
  var operande='0';
  var resultat='0';
  var total=0;
  var operateurPrec='';
  $('button').click(function() 
  {    
    var entree = $(this).attr("value");
    if(entree=='a')
    {
      operande='0';
      resultat='0';
      total=0;
      operateurPrec='';
    }
    else if(entree=='c')
    {
      if(operande.length<=1)
      {
        operande='0';    
      }
      else
      {
        operande=operande.substr(0,operande.length-1);
      }
    }
    else if(entree=='=')
    {
      total=calcul(total,operateurPrec,operande)
      if(operateurPrec=='=')
      {
        resultat=total
      }
      else
      {
        resultat+= operateurPrec+operande+"="+total;
      }
      operateurPrec='=';
      operande=0;
    }
    else if(entree=='/' || entree=='*' || entree=='-' || entree=="+")
    {
      if(resultat=='0' )
      {
        resultat=operande;
      }
      else if(operateurPrec== '=')
      {
        resultat=total;
      }
      else
      {
        resultat+=operateurPrec+operande;
      }
      total=calcul(total,operateurPrec,operande)
      operande=entree;
      operateurPrec=entree;
    }
    else if(entree=='.')
    {
      if(operande.indexOf(".")==-1)
      {
        operande+='.';
      }
    }
    else
    {
      if(operande=='+'||operande=='-'||operande=='*'||operande=='/')
      {
        operande='';
      }
      else if(operande=='' && operateurPrec=='=' )
      {
        operande='';
        resultat='';
        total=0;
        operateurPrec='';
      }
      else if(operande=='0' ) 
      {
        operande='';
        total=0;
      }
      if(operande.length<10)
      {
        operande+=entree;        
      }
    }
    if(resultat.length>32)
    {
      resultat=total;
    }
    if(entree=='=')
    {
      $('#operande').html(total);
    }
    else
    {
      $('#operande').html(operande);
    }
    if(resultat)
    {
      $('#resultat').html(resultat);   
    }
    else
    {
      $('#resultat').html('0');
    }
  });
});
    