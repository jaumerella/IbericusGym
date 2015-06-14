<?php
header('Access-Control-Allow-Origin: *');
//get all the course from db and reply using json structure
 
//connection to db
$mysqli = new mysqli("localhost", "ibericusgym", "", "my_ibericusgym");
 
if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    
    $mix = array();
    //echo "Successful connection"; // connection ok
 
    # extract results mysqli_result::fetch_array
    $qcourses = " SELECT * FROM course ORDER BY course.name ASC";
    
    $qcourseslevel = "SELECT level.description as level, course.name, images.url FROM course, level, images WHERE level.level_id= course.level_id and course.logo_id = images.image_id ORDER BY course.level_id, course.name ASC";
    
    $qaerobics = "SELECT course.name, course.description, room.name as room, course.schedule_id, images.url FROM courses_images, course, room, images WHERE course.name =\"Aerobics\" and course.room_id=room.room_id and course.course_id=courses_images.course_id and courses_images.image_id=images.image_id";
    
    
    $qboxing = "SELECT course.name, course.description, room.name as room, course.schedule_id, images.url FROM courses_images, course, room, images WHERE course.name =\"Boxing\" and course.room_id=room.room_id and course.course_id=courses_images.course_id and courses_images.image_id=images.image_id";
    
    $qyoga = "SELECT course.name, course.description, room.name as room, course.schedule_id, images.url FROM courses_images, course, room, images WHERE course.name =\"Yoga\" and course.room_id=room.room_id and course.course_id=courses_images.course_id and courses_images.image_id=images.image_id";
    
    $qcoursesinstructors = "SELECT distinct course.name as course, instructor.name, instructor.surname FROM course, room, instructor, inst_course WHERE (course.name =\"Aerobics\" or course.name =\"Boxing\" or course.name =\"Yoga\") and course.course_id = inst_course.course_id and inst_course.instructor_id = instructor.instructor_id ORDER BY course.name";
    
    
    $qcoursesmenu = "SELECT images.url, course.name FROM course, images WHERE course.logo_id=images.image_id ORDER BY course.name";
    
    
    
    $qlocation = " SELECT * FROM location";
    
    $qimaglocation = " SELECT url FROM images,location WHERE location.image_id = images.image_id";
    
    $qinstructor = " SELECT * FROM instructor";
    
    
    $qinstructorlist = "SELECT instructor.name, instructor.surname, instructor.age, instructor.years_experience, instructor.instructor_month, images.url FROM instructor, images WHERE instructor.image_id=images.image_id";
    
   $qJuan = "SELECT instructor.name, instructor.surname, instructor.age, instructor.description, instructor.years_experience, instructor.instructor_month, images.url, course.name as course FROM instructor, images, course, inst_course WHERE instructor.name= \"Juan\" and instructor.image_id=images.image_id and instructor.instructor_id=inst_course.instructor_id and inst_course.course_id= course.course_id";
    
    $qPedro = "SELECT instructor.name, instructor.surname, instructor.age, instructor.description, instructor.years_experience, instructor.instructor_month, images.url, course.name as course FROM instructor, images, course, inst_course WHERE instructor.name= \"Pedro\" and instructor.image_id=images.image_id and instructor.instructor_id=inst_course.instructor_id and inst_course.course_id= course.course_id";
    
    $qMaria = "SELECT instructor.name, instructor.surname, instructor.age, instructor.description, instructor.years_experience, instructor.instructor_month, images.url, course.name as course FROM instructor, images, course, inst_course WHERE instructor.name= \"Maria\" and instructor.image_id=images.image_id and instructor.instructor_id=inst_course.instructor_id and inst_course.course_id= course.course_id";
    
   $qInstructorsAwards=" SELECT instructor.name, award.name as award FROM instructor, inst_award, award WHERE (instructor.name= \"Juan\" or instructor.name= \"Maria\" or instructor.name= \"Pedro\") and instructor.instructor_id = inst_award.instructor_id and inst_award.award_id = award.award_id";
    
    
    //query execution
    $resultcourses = $mysqli->query($qcourses);
    $resultcourseslevel = $mysqli->query($qcourseslevel);
    $resultaerobics = $mysqli->query($qaerobics);
    $resultboxing = $mysqli->query($qboxing);
    $resultyoga = $mysqli->query($qyoga);
    $resultcoursinst = $mysqli->query($qcoursesinstructors);
    $resultcoursmenu = $mysqli->query($qcoursesmenu);
    
    
    $resultlocation = $mysqli->query($qlocation);
    $resultimaglocation = $mysqli->query($qimaglocation);
    
    
    $resultinstructor = $mysqli->query($qinstructor);
    $resultinstructorlist = $mysqli->query($qinstructorlist);
    $resultJuan = $mysqli->query($qJuan);
    $resultPedro = $mysqli->query($qPedro);
    $resultMaria = $mysqli->query($qMaria);
    $resultInstructorsAwards = $mysqli->query($qInstructorsAwards);

    
   
    
    
    //DATA COURSES
    //if there are data available
    if($resultcourses->num_rows >0)
    {
        $arraycourses = array();//create an array
        while($row = $resultcourses->fetch_array(MYSQL_ASSOC)) {
            $arraycourses[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
        //echo json_encode($arraycourses);
    }
    
    $mix["course"]=$arraycourses;
    
    
    //DATA COURSES BY LEVEL
     if($resultcourseslevel->num_rows >0)
    {
        $arraycourseslevel = array();//create an array
        while($row = $resultcourseslevel->fetch_array(MYSQL_ASSOC)) {
            $arraycourseslevel[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["courselevel"]=$arraycourseslevel;
    
    
     //DATA AEROBICS
     if($resultaerobics->num_rows >0)
    {
        $arrayaerobics = array();//create an array
        while($row = $resultaerobics->fetch_array(MYSQL_ASSOC)) {
            $arrayaerobics[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["aerobics"]=$arrayaerobics;
        
    
     //DATA BOXING
     if($resultboxing->num_rows >0)
    {
        $arrayboxing = array();//create an array
        while($row = $resultboxing->fetch_array(MYSQL_ASSOC)) {
            $arrayboxing[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["boxing"]=$arrayboxing;
    
    
     //DATA YOGA
     if($resultyoga->num_rows >0)
    {
        $arrayyoga = array();//create an array
        while($row = $resultyoga->fetch_array(MYSQL_ASSOC)) {
            $arrayyoga[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["yoga"]=$arrayyoga;
        
    
       //DATA COURSEINSTRUCTORS
     if($resultcoursinst->num_rows >0)
    {
        $arraycoursinst = array();//create an array
        while($row = $resultcoursinst->fetch_array(MYSQL_ASSOC)) {
            $arraycoursinst[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["coursinstr"]=$arraycoursinst;
    
    
        //DATA COURSES MENU
     if($resultcoursmenu->num_rows >0)
    {
        $arraycoursmenu = array();//create an array
        while($row = $resultcoursmenu->fetch_array(MYSQL_ASSOC)) {
            $arraycoursmenu[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["coursmenu"]=$arraycoursmenu;
    
    
    
    
    
    
    //DATA LOCATION
    if($resultlocation->num_rows >0)
    {
        $arraylocation = array();//create an array
        while($row = $resultlocation->fetch_array(MYSQL_ASSOC)) {
            $arraylocation[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
        //echo json_encode($arraylocation);
    }
    
    
    $mix["location"]=$arraylocation;
    
    
     //DATA IMAGELOCATION
     if($resultimaglocation->num_rows >0)
    {
        $arrayimaglocation = array();//create an array
        while($row = $resultimaglocation->fetch_array(MYSQL_ASSOC)) {
            $arrayimaglocation[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["imaglocation"]=$arrayimaglocation;
    
    
    
    
     //DATA INSTRUCTOR
    if($resultinstructor->num_rows >0)
    {
        $arrayinstructor = array();//create an array
        while($row = $resultinstructor->fetch_array(MYSQL_ASSOC)) {
            $arrayinstructor[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["instructor"]=$arrayinstructor;
    
     
     //DATA INSTRUCTOR LIST
    if($resultinstructorlist->num_rows >0)
    {
        $arrayinstructorlist = array();//create an array
        while($row = $resultinstructorlist->fetch_array(MYSQL_ASSOC)) {
            $arrayinstructorlist[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["instructorlist"]=$arrayinstructorlist;
    
    
    
    //DATA JUAN
    if($resultJuan->num_rows >0)
    {
        $arrayJuan = array();//create an array
        while($row = $resultJuan->fetch_array(MYSQL_ASSOC)) {
            $arrayJuan[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["juan"]=$arrayJuan;
    
    
     //DATA PEDRO
    if($resultPedro->num_rows >0)
    {
        $arrayPedro = array();//create an array
        while($row = $resultPedro->fetch_array(MYSQL_ASSOC)) {
            $arrayPedro[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["pedro"]=$arrayPedro;
    
    
     //DATA MARIA
    if($resultMaria->num_rows >0)
    {
        $arrayMaria = array();//create an array
        while($row = $resultMaria->fetch_array(MYSQL_ASSOC)) {
            $arrayMaria[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["maria"]=$arrayMaria;
    
    
     //DATA INSTRUCTORS AWARDS
    if($resultInstructorsAwards->num_rows >0)
    {
        $arrayMaria = array();//create an array
        while($row = $resultInstructorsAwards->fetch_array(MYSQL_ASSOC)) {
            $arrayInstructorsAwards[] = array_map('utf8_encode', $row);    //<----- CORRECT HERE        
        }
    }
    
    $mix["instrawards"]=$arrayInstructorsAwards;
    
    
    
    
    
    
    
    //IMPRIME EN JSON
        print_r(json_encode($mix));
    
    //free result
    $resultcourses->close();
    $resultcourseslevel->close();
    $resultaerobics->close();
    $resultboxing->close();
    $resultyoga->close();
    $resultcoursinst->close();
    $resultcoursmenu->close();
    
    
    $resultlocation->close();
    $resultimaglocation->close();
    
    
    $resultinstructor->close();
    $resultinstructorlist->close();
    $resultJuan->close();
    $resultPedro->close();
    $resultMaria->close();
    $resultInstructorsAwards->close();
   
 
    //close connection
    $mysqli->close();
    
    
    
   
    
}
?>