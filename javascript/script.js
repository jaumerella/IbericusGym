$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/sql_connection.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].title);
                
                el+="<div class='course' id='c"+courses[i].id+"'><h2>"+courses[i].title+"</h2><span>"+courses[i].description+"</span></div>";             
                
            }
            
            $(".courses").append(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}
