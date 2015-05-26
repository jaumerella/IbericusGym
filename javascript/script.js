$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var course_id=1;
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        //crossDomain: true, //localhost purposes
        url: "../php/sql_connection.php", //Relative or absolute path to file.php file
        data: {course:course_id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].name);
                
                el+="<h2>"+courses[i].name+"</h2><span>"+courses[i].description+"</span>";   

            }
            
            $(".courses").append(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

