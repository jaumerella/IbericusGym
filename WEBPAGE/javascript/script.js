console.log("I'm ready!");
//var course_id=1;

$.ajax({
    method: "POST",
    //dataType: "json", //type of data
    //crossDomain: true, //localhost purposes
    url: "../php/sql_connection.php", //Relative or absolute path to file.php file
    //data: {course:course_id},
    success: function (response) {
        console.log(JSON.parse(response));
        var consultas = JSON.parse(response);


        $(document).ready(getCourses(consultas));
        $(document).ready(getCoursesList(consultas));
        $(document).ready(getCoursesByLevel(consultas));
        $(document).ready(getAerobics(consultas));
        $(document).ready(getBoxing(consultas));
        $(document).ready(getYoga(consultas));


        $(document).ready(getDescLocation(consultas));
        $(document).ready(getAddress(consultas));
        $(document).ready(getimaglocation(consultas));

        $(document).ready(getInstructors(consultas));
        $(document).ready(getInstructorsList(consultas));
        $(document).ready(getJuan(consultas));
        $(document).ready(getPedro(consultas));
        $(document).ready(getMaria(consultas));


    },
    error: function (request, error) {
        console.log("Error");
    }

});



//COURSES//

function getCourses(consultas) {
    var co = "";
    //console.log("tamaño courses: "+ consultas["course"].length);
    for (var i = 0; i < consultas["course"].length; i++) {
        if (consultas["coursmenu"][i].name == "Aerobics" || consultas["coursmenu"][i].name == "Boxing" || consultas["coursmenu"][i].name == "Yoga") {
            co += "<a href='../pages/" + consultas["coursmenu"][i].name + ".html' class='list-group-item'>" + consultas["course"][i].name + "</a>";
        } else {
            co += "<a class='list-group-item'>" + consultas["course"][i].name + "</a>";
        }
    }
    $(".courses").append(co);
}

function getCoursesList(consultas) {

    var coli = "<table class='table table-bordered'>";
    //var coli = "<table>";
    for (var i = 0; i < consultas["coursmenu"].length; i++) {
        if (i % 3 == 0) {
            coli += "<tr>";
        }

        if (consultas["coursmenu"][i].name == "Aerobics" || consultas["coursmenu"][i].name == "Boxing" || consultas["coursmenu"][i].name == "Yoga") {
            coli += "<td><h4><a href='../pages/" + consultas["coursmenu"][i].name + ".html'><img src=\"" + consultas["coursmenu"][i].url + "\" class='cell'> " + consultas["coursmenu"][i].name + "</a></h4></td>";
        } else {
            coli += "<td><h4><a><img src=\"" + consultas["coursmenu"][i].url + "\" class='cell'> " + consultas["coursmenu"][i].name + "</a></h4></td>";
        }
        if ((i + 1) % 3 == 0) {
            coli += "</tr>";
        }
    }
    coli += "</table>";

    //console.log(coli);
    $(".courseslist").append(coli);
}




function getCoursesByLevel(consultas) {

    var colevel = "<ul style='list-style-type:none'>";
    colevel += "<li class='menutitle'><h3>Beginner</h3></li>";

    for (var i = 0; i < consultas["courselevel"].length; i++) {
        if (consultas["courselevel"][i].level == "Beginner") {
            if (consultas["courselevel"][i].name == "Aerobics" || consultas["courselevel"][i].name == "Boxing" || consultas["courselevel"][i].name == "Yoga") {
                colevel += "<li class='menuelement'><h4><a href='../pages/" + consultas["courselevel"][i].name + ".html'><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>"

            } else {
                colevel += "<li class='menuelement'><h4><a><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>";
            }
        }
    }

    colevel += "<li class='menutitle'><h3>Medium</h3></li>";

    for (var i = 0; i < consultas["courselevel"].length; i++) {
        if (consultas["courselevel"][i].level == "Medium") {
            if (consultas["courselevel"][i].name == "Aerobics" || consultas["courselevel"][i].name == "Boxing" || consultas["courselevel"][i].name == "Yoga") {
                colevel += "<li class='menuelement'><h4><a href='../pages/" + consultas["courselevel"][i].name + ".html'><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>"

            } else {
                colevel += "<li class='menuelement'><h4><a><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>";
            }
        }
    }

    colevel += "<li class='menutitle'><h3>Advanced</h3></li>";

    for (var i = 0; i < consultas["courselevel"].length; i++) {
        if (consultas["courselevel"][i].level == "Advanced") {
            if (consultas["courselevel"][i].name == "Aerobics" || consultas["courselevel"][i].name == "Boxing" || consultas["courselevel"][i].name == "Yoga") {
                colevel += "<li class='menuelement'><h4><a href='../pages/" + consultas["courselevel"][i].name + ".html'><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>"

            } else {
                colevel += "<li class='menuelement'><h4><a><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>";
            }
        }
    }

    colevel += "<li class='menutitle'><h3>Professional</h3></li>";

    for (var i = 0; i < consultas["courselevel"].length; i++) {
        if (consultas["courselevel"][i].level == "Professional") {
            if (consultas["courselevel"][i].name == "Aerobics" || consultas["courselevel"][i].name == "Boxing" || consultas["courselevel"][i].name == "Yoga") {
                colevel += "<li class='menuelement'><h4><a href='../pages/" + consultas["courselevel"][i].name + ".html'><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>"

            } else {
                colevel += "<li class='menuelement'><h4><a><img src='" + consultas["courselevel"][i].url + "'> " + consultas["courselevel"][i].name + "</a></h4></li>";
            }
        }
    }

    colevel += "</ul>";
    $(".courseslevel").append(colevel);
}



function getAerobics(consultas) {

    var aerobicdescription = consultas["aerobics"][0].description;
    var aerobicroom = "The room of this course is always in: " + consultas["aerobics"][0].room;
    var aerobicimag = "";
    var aerobicinst = "<h2>Instructors:</h2><br>";

    for (var i = 0; i < consultas["aerobics"].length; i++) {
        if (i == 0) {
            aerobicimag += "<img src=\"" + consultas["aerobics"][i].url + "\" class='imageCourseBig'> </img><br>";
        } else {
            aerobicimag += "<img src=\"" + consultas["aerobics"][i].url + "\" class='imageCourseSmall'> </img>";
        }
    }

    for (var i = 0; i < consultas["coursinstr"].length; i++) {
        if (consultas["coursinstr"][i].course == "Aerobics") {
            if (consultas["coursinstr"][i].name == "Juan") {
                aerobicinst += "<a href=\"../pages/JuanRodriguez.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + "</a><br><br>";
            } else if (consultas["coursinstr"][i].name == "Maria") {
                aerobicinst += "<a href=\"../pages/MariaJimenez.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + " </a><br><br>";
            } else if (consultas["coursinstr"][i].name == "Pedro") {
                aerobicinst += "<a href=\"../pages/PedroGarcia.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + " </a><br><br>";
            } else {
                aerobicinst += consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + "<br><br>";
            }
        }
    }
    $(".aerobicsdesc").append(aerobicdescription);
    $(".aerobicsroom").append(aerobicroom);
    $(".aerobicsimages").append(aerobicimag);
    $(".aerobicsinstructors").append(aerobicinst);

}

function getBoxing(consultas) {

    var boxingdescription = consultas["boxing"][0].description;
    var boxingroom = "The room of this course is always in: " + consultas["boxing"][0].room;
    var boxingimag = "";
    var boxinginst = "<h2>Instructors:</h2><br>";

    for (var i = 0; i < consultas["boxing"].length; i++) {
        if (i == 0) {
            boxingimag += "<img src=\"" + consultas["boxing"][i].url + "\" class='imageCourseBig'> </img><br>";
        } else {
            boxingimag += "<img src=\"" + consultas["boxing"][i].url + "\" class='imageCourseSmall'> </img>";
        }
    }

    for (var i = 0; i < consultas["coursinstr"].length; i++) {
        if (consultas["coursinstr"][i].course == "Boxing") {
            if (consultas["coursinstr"][i].name == "Juan") {
                boxinginst += "<a href=\"../pages/JuanRodriguez.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + "</a><br><br>";
            } else if (consultas["coursinstr"][i].name == "Maria") {
                boxinginst += "<a href=\"../pages/MariaJimenez.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + " </a><br><br>";
            } else if (consultas["coursinstr"][i].name == "Pedro") {
                boxinginst += "<a href=\"../pages/PedroGarcia.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + " </a><br><br>";
            } else {
                boxinginst += consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + "<br><br>";
            }
        }
    }
    $(".boxingdesc").append(boxingdescription);
    $(".boxingroom").append(boxingroom);
    $(".boxingimages").append(boxingimag);
    $(".boxinginstructors").append(boxinginst);
}

function getYoga(consultas) {

    var yogadescription = consultas["yoga"][0].description;
    var yogaroom = "The room of this course is always in: " + consultas["yoga"][0].room;
    var yogaimag = "";
    var yogainstr = "<h2>Instructors:</h2><br>";

    for (var i = 0; i < consultas["yoga"].length; i++) {
        if (i == 0) {
            yogaimag += "<img src=\"" + consultas["yoga"][i].url + "\" class='imageCourseBig'> </img><br>";
        } else {
            yogaimag += "<img src=\"" + consultas["yoga"][i].url + "\" class='imageCourseSmall'> </img>";
        }
    }

    for (var i = 0; i < consultas["coursinstr"].length; i++) {
        if (consultas["coursinstr"][i].course == "Yoga") {
            if (consultas["coursinstr"][i].name == "Juan") {
                yogainstr += "<a href=\"../pages/JuanRodriguez.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + "</a><br><br>";
            } else if (consultas["coursinstr"][i].name == "Maria") {
                yogainstr += "<a href=\"../pages/MariaJimenez.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + " </a><br><br>";
            } else if (consultas["coursinstr"][i].name == "Pedro") {
                yogainstr += "<a href=\"../pages/PedroGarcia.html\">" + consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + " </a><br><br>";
            } else {
                yogainstr += consultas["coursinstr"][i].name + " " + consultas["coursinstr"][i].surname + "<br><br>";
            }
        }
    }
    $(".yogadesc").append(yogadescription);
    $(".yogaroom").append(yogaroom);
    $(".yogaimages").append(yogaimag);
    $(".yogainstructors").append(yogainstr);

}









//LOCATION//

function getDescLocation(consultas) {

    var loc = "";
    for (var i = 0; i < consultas["location"].length; i++) {
        loc += "<span>" + consultas["location"][i].description + "</span>";
    }
    $(".locations").append(loc);
}

function getAddress(consultas) {

    var add = "";
    for (var i = 0; i < consultas["location"].length; i++) {
        add += consultas["location"][i].address;
    }
    $(".address").append(add);
}

function getimaglocation(consultas) {

    var imloc = "";
    for (var i = 0; i < consultas["imaglocation"].length; i++) {
        imloc = "<img src=\"" + consultas["imaglocation"][i].url + "\" class='imaglocati'> </img>";
    }

    $(".imaglocation").append(imloc);
}



//INSTRUCTORS//
function getInstructors(consultas) {

    var ins = "";
    for (var i = 0; i < consultas["instructor"].length; i++) {
        if (consultas["instructor"][i].name == "Juan") {
            ins += "<a href='../pages/JuanRodriguez.html' class='list-group-item'>" + consultas["instructor"][i].name + "</a>";
        } else if (consultas["instructor"][i].name == "Maria") {
            ins += "<a href='../pages/MariaJimenez.html' class='list-group-item'>" + consultas["instructor"][i].name + "</a>";
        } else if (consultas["instructor"][i].name == "Pedro") {
            ins += "<a href='../pages/PedroGarcia.html' class='list-group-item'>" + consultas["instructor"][i].name + "</a>";
        } else {
            ins += "<a href='#' class='list-group-item'>" + consultas["instructor"][i].name + "</a>";
        }
    }
    $(".instructors").append(ins);
}

function getInstructorsList(consultas) {

    var inslist = "<table class='table table-bordered'>";
    for (var i = 0; i < consultas["instructorlist"].length; i++) {
        if (i % 2 == 0) {
            inslist += "<tr>";
        }

        if (consultas["instructorlist"][i].name == "Juan" || consultas["instructorlist"][i].name == "Pedro" || consultas["instructorlist"][i].name == "Maria") {

            inslist += "<td><a href='../pages/" + consultas["instructorlist"][i].name + consultas["instructorlist"][i].surname + ".html'><h3>" + consultas["instructorlist"][i].name + " " + consultas["instructorlist"][i].surname + ", " + consultas["instructorlist"][i].age + "</a>";

            if (consultas["instructorlist"][i].instructor_month == 1) {
                inslist += " <img src='../resources/images/iconos/award2.jpg' class= 'imageAward'> </img>";
            }
            inslist += "</h3><br><h4>Years of experience: " + consultas["instructorlist"][i].years_experience + "</h4><br><a href='../pages/" + consultas["instructorlist"][i].name + consultas["instructorlist"][i].surname + ".html'><img  src='" + consultas["instructorlist"][i].url + "' class= 'imageInstructor'> </img></a></td>";


        } else {
            inslist += "<td><br><a><h3>" + consultas["instructorlist"][i].name + " " + consultas["instructorlist"][i].surname + ", " + consultas["instructorlist"][i].age + "</a>";

            if (consultas["instructorlist"][i].instructor_month == 1) {
                inslist += " <img src='../resources/images/iconos/award2.jpg' class= 'imageAward'> </img>";
            } else {
                inslist += "<br><br>";
            }
            inslist += "</h3><br><h4>Years of experience: " + consultas["instructorlist"][i].years_experience + "</h4><br><a><img  src='" + consultas["instructorlist"][i].url + "' class= 'imageInstructor'> </img></a></td>";

        }

        if ((i + 1) % 2 == 0) {
            inslist += "</tr>";
        }
    }
    inslist += "</table>";

    console.log(inslist);
    $(".instructorslist").append(inslist);
}


function getJuan(consultas) {

    var juantitle = "<h2>" + consultas["juan"][0].name + " " + consultas["juan"][0].surname + ", " + consultas["juan"][0].age;

    if (consultas["juan"][0].instructor_month == 1) {
        juantitle += "   <img src='../resources/images/iconos/award2.jpg' class= 'imageAward'> </img></h2>";

    } else {
        juantitle += "</h2>"
    }

    var juandescription = consultas["juan"][0].description;
    var juanexperience = "Years of experience: " + consultas["juan"][0].years_experience;
    var juanimage = "<img src=\"" + consultas["juan"][0].url + "\" class= 'imageInstructor'> </img>";

    var juancourses = "<h2>Courses:</h2>";
    for (var i = 0; i < consultas["juan"].length; i++) {
        if (consultas["juan"][i].course == "Aerobics") {
            juancourses += "<a href=\"../pages/Aerobics.html\">" + consultas["juan"][i].course + "</a><br><br>";
        } else if (consultas["juan"][i].course == "Boxing") {
            juancourses += "<a href=\"../pages/Boxing.html\">" + consultas["juan"][i].course + "</a><br><br>";
        } else if (consultas["juan"][i].course == "Yoga") {
            juancourses += "<a href=\"../pages/Yoga.html\">" + consultas["juan"][i].course + "</a><br><br>";
        } else {
            juancourses += consultas["juan"][i].course + "<br><br>";
        }

    }

    var juanawards = "<h2>Awards:</h2>";
    for (var i = 0; i < consultas["instrawards"].length; i++) {

        if (consultas["instrawards"][i].name == "Juan") {
            juanawards += consultas["instrawards"][i].award + "<br><br>";
        }
    }

    $(".juantitle").append(juantitle);
    $(".juandescription").append(juandescription);
    $(".juanexperience").append(juanexperience);
    $(".juanimage").append(juanimage);
    $(".juancourses").append(juancourses);
    $(".juanawards").append(juanawards);
}


function getPedro(consultas) {

    var pedrotitle = "<h2>" + consultas["pedro"][0].name + " " + consultas["pedro"][0].surname + ", " + consultas["pedro"][0].age;

    if (consultas["pedro"][0].instructor_month == 1) {
        pedrotitle += "   <img src='../resources/images/iconos/award2.jpg' class= 'imageAward'> </img></h2>";

    } else {
        pedrotitle += "</h2>"
    }

    var pedrodescription = consultas["pedro"][0].description;
    var pedroexperience = "Years of experience: " + consultas["pedro"][0].years_experience;
    var pedroimage = "<img src=\"" + consultas["pedro"][0].url + "\"class= 'imageInstructor'> </img>";

    var pedrocourses = "<h2>Courses:</h2>";
    for (var i = 0; i < consultas["pedro"].length; i++) {

        if (consultas["pedro"][i].course == "Aerobics") {
            pedrocourses += "<a href=\"../pages/Aerobics.html\">" + consultas["pedro"][i].course + "</a><br><br>";
        } else if (consultas["pedro"][i].course == "Boxing") {
            pedrocourses += "<a href=\"../pages/Boxing.html\">" + consultas["pedro"][i].course + "</a><br><br>";
        } else if (consultas["pedro"][i].course == "Yoga") {
            pedrocourses += "<a href=\"../pages/Yoga.html\">" + consultas["pedro"][i].course + "</a><br><br>";
        } else {
            pedrocourses += consultas["pedro"][i].course + "<br><br>";
        }

    }

    var pedroawards = "<h2>Awards:</h2>";
    for (var i = 0; i < consultas["instrawards"].length; i++) {

        if (consultas["instrawards"][i].name == "Pedro") {
            pedroawards += consultas["instrawards"][i].award + "<br><br>";
        }
    }

    $(".pedrotitle").append(pedrotitle);
    $(".pedrodescription").append(pedrodescription);
    $(".pedroexperience").append(pedroexperience);
    $(".pedroimage").append(pedroimage);
    $(".pedrocourses").append(pedrocourses);
    $(".pedroawards").append(pedroawards);
}


function getMaria(consultas) {

    var mariatitle = "<h2>" + consultas["maria"][0].name + " " + consultas["maria"][0].surname + ", " + consultas["maria"][0].age;

    if (consultas["maria"][0].instructor_month == 1) {
        mariatitle += "   <img src='../resources/images/iconos/award2.jpg' class= 'imageAward'> </img></h2>";

    } else {
        mariatitle += "</h2>"
    }

    var mariadescription = consultas["maria"][0].description;
    var mariaexperience = "Years of experience: " + consultas["maria"][0].years_experience;
    var mariaimage = "<img src=\"" + consultas["maria"][0].url + "\"class= 'imageInstructor'> </img>";

    var mariacourses = "<h2>Courses:</h2>";
    for (var i = 0; i < consultas["maria"].length; i++) {

        if (consultas["maria"][i].course == "Aerobics") {
            mariacourses += "<a href=\"../pages/Aerobics.html\">" + consultas["maria"][i].course + "</a><br><br>";
        } else if (consultas["maria"][i].course == "Boxing") {
            mariacourses += "<a href=\"../pages/Boxing.html\">" + consultas["maria"][i].course + "</a><br><br>";
        } else if (consultas["maria"][i].course == "Yoga") {
            mariacourses += "<a href=\"../pages/Yoga.html\">" + consultas["maria"][i].course + "</a><br><br>";
        } else {
            mariacourses += consultas["maria"][i].course + "<br><br>";
        }
    }

    var mariaawards = "<h2>Awards:</h2>";
    for (var i = 0; i < consultas["instrawards"].length; i++) {

        if (consultas["instrawards"][i].name == "Maria") {
            mariaawards += consultas["instrawards"][i].award + "<br><br>";
        }
    }

    $(".mariatitle").append(mariatitle);
    $(".mariadescription").append(mariadescription);
    $(".mariaexperience").append(mariaexperience);
    $(".mariaimage").append(mariaimage);
    $(".mariacourses").append(mariacourses);
    $(".mariaawards").append(mariaawards);
    
}