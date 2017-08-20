$(document).ready(function() 
{
  var sessionLength=25;
  var breakLength=5;
  var currentDuration=sessionLength*60;
  var currentActivity="Work";
  var currentIntervalId=undefined;
  
  PrintDuration(currentDuration);
  $("#session").html(sessionLength);
  $("#break").html(breakLength);
  $("#activity").html(currentActivity);
  PrintDuration(currentDuration);
  $("#activity").removeClass("break");
  $("#activity").addClass("work");
  $("#time-left").removeClass("counting");
  $("#time-left").addClass("stopped");
  
  $('button').click(function() 
  {    
     if(currentIntervalId)
     {
       return;
     }
    var entree = this.id;
    if(entree=="work-plus" && sessionLength<60)
    {
      sessionLength++;
      if(currentActivity=="Work")
      {
        currentDuration=sessionLength*60;
        PrintDuration(currentDuration);
      }      
    }
    if(entree=="work-minus" && sessionLength>1)
    {
      sessionLength-=1;
      if(currentActivity=="Work")
      {
        currentDuration=sessionLength*60;
        PrintDuration(currentDuration);
      }      
    }
    if(entree=="break-plus" && breakLength<60)
    {
      breakLength++
      if(currentActivity=="Break")
      {
        currentDuration=breakLength*60;
        PrintDuration(currentDuration);
      }      
     }
    if(entree=="break-minus" && breakLength>1)
    {
      breakLength--;
       if(currentActivity=="Break")
      {
        currentDuration=breakLength*60;
        PrintDuration(currentDuration);
      }      
    }
    $("#session").html(sessionLength);
    $("#break").html(breakLength);
  });

  $("#active-content").on("click",function() 
  {    
     if(currentIntervalId)
     {
       clearInterval(currentIntervalId);
       currentIntervalId=undefined;
       $("#time-left").removeClass("counting");
       $("#time-left").addClass("stopped");
     }
     else
     {
       $("#time-left").removeClass("stopped");
       $("#time-left").addClass("counting");
       currentIntervalId=setInterval(function()
       {
         currentDuration-=1;
         if(currentDuration<1)
         {
           //Sonner la cloche
           //recharger currentDuration avec le bon nombre *60
           if(currentActivity=="Work")
           {
             currentActivity="Break";
             currentDuration=breakLength*60;
             $("#activity").removeClass("work");
             $("#activity").addClass("break");
           }
           else
           {
             currentDuration=sessionLength*60;   
             currentActivity=="Work"
             $("#activity").removeClass("break");
             $("#activity").addClass("work");
          }
           $("#activity").html(currentActivity);
         }
         PrintDuration(currentDuration);
       }
       ,1000);
     }
  });

});

function PrintDuration(d)
{
   //var h = Math.floor(d / 3600);
   var m = Math.floor(d % 3600 / 60);
   var s = Math.floor(d % 3600 % 60);
   //var durationString=('0' + h) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
   var durationString= ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);

   $("#time-left").html(durationString);
}
  