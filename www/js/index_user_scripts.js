/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
    

    
        /* button  Set background colour */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        
        localStorage.bgColour = document.getElementById("colour_list").value;
        document.body.style.backgroundColor = localStorage.bgColour;
         
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
