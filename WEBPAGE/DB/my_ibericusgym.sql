-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 14, 2015 at 09:30 PM
-- Server version: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_ibericusgym`
--

-- --------------------------------------------------------

--
-- Table structure for table `award`
--

CREATE TABLE IF NOT EXISTS `award` (
  `award_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`award_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `award`
--

INSERT INTO `award` (`award_id`, `name`) VALUES
(1, 'ACSM'),
(2, 'TRX'),
(3, 'Balanced Body'),
(4, 'NASM'),
(5, 'ACE'),
(6, 'Zumba'),
(7, 'KBC');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `course_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `schedule_id` int(3) NOT NULL,
  `room_id` int(3) NOT NULL,
  `level_id` int(3) NOT NULL,
  `logo_id` int(11) NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `name`, `description`, `schedule_id`, `room_id`, `level_id`, `logo_id`) VALUES
(1, 'Aerobics', 'Aerobic exercise is any physical activity that makes you sweat, causes you to breathe harder and gets your heart beating faster than at rest.\r\nIt strengthens your heart and lungs and trains your cardiovascular system to manage and deliver oxygen more quickly and efficiently throughout your body.\r\nAerobic exercise uses your large muscle groups, is rhythmic in nature and can be maintained continuously for at least 10 minutes.\r\nBefore going into the benefits of aerobic exercise, let''s break down some key terms mentioned above:\r\nCardiovascular system - is made up of your heart and blood vessels e.g., arteries, veins, and capillaries that transports blood throughout the body.\r\nAerobic - refers to how your body uses oxygen to sufficiently meet energy demands during exercise.\r\n\r\nBenefits:\r\nIn addition to strengthening your heart and cardiovascular system, participation in regular aerobic exercise has many health benefits. Aerobic exercise:\r\n\r\nImproves your circulation and helps your body use oxygen better\r\nIncreases energy\r\nIncreases endurance, which means you can workout longer without getting tired\r\nHelps reduce the risk of developing heart disease\r\nHelps reduce the risk of developing diabetes\r\nHelps reduce body fat\r\nHelps you reach and maintain a healthy weight\r\nHelps reduce stress, tension, anxiety and depression\r\nImproves sleep\r\n', 0, 1, 2, 16),
(2, 'Boxing', 'Boxing is a combat sport in which two people engage in a contest of strength, speed, reflexes, endurance and will, by throwing punches at each other,\r\nusually with gloved hands. Historically, the goals have been to weaken and knock down the opponent.\r\nAmateur boxing is both an Olympic and Commonwealth sport and is a common fixture in most international games?it also has its own World Championships.\r\nBoxing is supervised by a referee over a series of one- to three-minute intervals called rounds.\r\nThe result is decided when an opponent is deemed incapable to continue by a referee, is disqualified for breaking a rule, resigns by throwing in a towel,\r\nor is pronounced the winner or loser based on the judges'' scorecards at the end of the contest.\r\nIn the event that both fighters gain equal scores from the judges, the fight is considered a draw.\r\n\r\nThe boxing course with be splited in 3 different levels for the amateurs, intermediates and professionals.', 0, 2, 4, 18),
(3, 'Yoga', 'Yoga is a practical aid, not a religion. Yoga is an ancient art based on a harmonizing system of development for the body, mind, and spirit.\r\nThe continued practice of yoga will lead you to a sense of peace and well-being, and also a feeling of being at one with their environment.\r\nThis is a simple definition.\r\nThe practice of yoga makes the body strong and flexible, it also improves the functioning of the respiratory, circulatory, digestive, and hormonal systems.\r\nYoga brings about emotional stability and clarity of mind.\r\nIn the practice of Yoga the ultimate aim is one of\r\nself-development and self-realization.\r\n\r\nEveryone is able to practice Yoga!', 0, 3, 1, 21),
(4, 'Bodyweight', '', 0, 0, 3, 17),
(5, 'Climbing', '', 0, 0, 4, 19),
(6, 'Fitness', '', 0, 0, 2, 17),
(7, 'Judo', '', 0, 0, 3, 20),
(8, 'Rehabilitation', '', 0, 0, 1, 21),
(9, 'Running', '', 0, 0, 2, 22),
(10, 'Spinning', '', 0, 0, 2, 23),
(11, 'Swimming', '', 0, 0, 2, 24),
(12, 'Zumba', '', 0, 0, 3, 25);

-- --------------------------------------------------------

--
-- Table structure for table `courses_images`
--

CREATE TABLE IF NOT EXISTS `courses_images` (
  `course_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses_images`
--

INSERT INTO `courses_images` (`course_id`, `image_id`) VALUES
(1, 5),
(1, 6),
(1, 7),
(2, 8),
(2, 9),
(2, 10),
(3, 11),
(3, 12),
(3, 13);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `url`) VALUES
(1, '../resources/images/Teachers/teacher1.jpg'),
(2, '../resources/images/Teachers/teacher2.jpg'),
(3, '../resources/images/Teachers/teacher3.jpg'),
(4, '../resources/images/Teachers/teacher4.jpg'),
(5, '../resources/images/Courses/aerobic1.png'),
(6, '../resources/images/Courses/aerobic2.gif'),
(7, '../resources/images/Courses/aerobic3.jpg'),
(8, '../resources/images/Courses/boxing1.jpg'),
(9, '../resources/images/Courses/boxing2.jpg'),
(10, '../resources/images/Courses/boxing3.jpg'),
(11, '../resources/images/Courses/yoga1.jpg'),
(12, '../resources/images/Courses/yoga2.jpg'),
(13, '../resources/images/Courses/yoga3.jpg'),
(16, '../resources/images/iconos/aerobics.png'),
(17, '../resources/images/iconos/bodyweight.png'),
(18, '../resources/images/iconos/boxing.png'),
(19, '../resources/images/iconos/climbing.png'),
(20, '../resources/images/iconos/judo.png'),
(21, '../resources/images/iconos/rehabilitation.png'),
(22, '../resources/images/iconos/running.png'),
(23, '../resources/images/iconos/spinning.png'),
(24, '../resources/images/iconos/swimming.png'),
(25, '../resources/images/iconos/zumba.png'),
(26, '../resources/images/iconos/award2.jpg'),
(27, '../resources/images/places/Edificio1.jpg'),
(28, '../resources/images/Teachers/teacher5.png'),
(29, '../resources/images/Teachers/teacher6.png'),
(30, '../resources/images/Teachers/teacher7.png');

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE IF NOT EXISTS `instructor` (
  `instructor_id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `description` text,
  `years_experience` int(3) DEFAULT NULL,
  `instructor_month` tinyint(1) DEFAULT NULL,
  `image_id` int(3) DEFAULT NULL,
  PRIMARY KEY (`instructor_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`instructor_id`, `name`, `surname`, `age`, `description`, `years_experience`, `instructor_month`, `image_id`) VALUES
(1, 'Juan', 'Rodriguez', 30, 'I graduated from HUNTER COLLEGE with a Bachelor’s degree in Physical Education, I hold an Associate degree from LAGUARDIA COLLEGE in Physical Therapy. I am also certified as a massage herapist, Fitness, Bodyweight and Boxing instructor. As a personal trainer I specialize in performance enhancement and corrective exercise specialist through the National Academy of Sports Medicine (NASM). I have been personal training for over 8 years and working all populations with many different injuries. I enjoy biking and handball on my days off work.', 8, 1, 1),
(2, 'Pedro', 'Garcia', 33, 'My training practice is based on helping you live a healthier life. As such, I will improve your posture and\r\ncore before moving on to more advanced exercises. Drawing from my military and martial arts background, I know\r\nthat I cannot lead where I will not go. This means that any exercise I ask you to do, I have also done in my workouts.\r\nI will not just teach you the technique, but I can tell you how the exercise feels and how it will help you over the\r\ncourse of time. I exercise, eat a healthy diet, keep my stress levels low, and in many other ways live the same life I teach. In my free time, you will find me rock climbing with my children, and otherwise enjoying the benefits of good health. Whether you want to compete in an Ironman or if you just want to stand up straight, my training methods will help you to achieve your goals. Come see for yourself!', 13, 1, 2),
(3, 'Maria', 'Jimenez', 27, 'Hello, My name is Maria, and I have been a part of the dance and/or fitness industry for 16 years. To see people inspired\r\nto be as healthy as they can be, this is my mission. “Exercise.” That word makes some people jump for joy while others\r\ncringe. There is so much more to exercise than treadmills and bodybuilding. I take it as my responsibility to work with\r\nyou, as my client, to discover how to enjoy working out, both in traditional and not-so-traditional ways. My background\r\nis diverse, with a wide range of experience in dance, group fitness, Pilates, TRX, Zumba, beginner through intense\r\nbootcamps, and both under and overweight clientele.', 5, 1, 3),
(4, 'Alvaro', 'Sanchez', 39, '', 17, 0, 4),
(5, 'Manuela', 'del Olmo', 25, '', 4, 0, 28),
(6, 'Alberto', 'Martín', 28, '', 5, 0, 29),
(7, 'Laura', 'Lobón', 42, '', 14, 1, 30);

-- --------------------------------------------------------

--
-- Table structure for table `inst_award`
--

CREATE TABLE IF NOT EXISTS `inst_award` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `instructor_id` int(3) NOT NULL,
  `award_id` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `inst_award`
--

INSERT INTO `inst_award` (`id`, `instructor_id`, `award_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 7),
(5, 2, 2),
(6, 2, 4),
(7, 2, 5),
(8, 3, 1),
(9, 3, 5),
(10, 3, 6),
(11, 4, 1),
(12, 4, 7),
(13, 4, 3),
(14, 5, 5),
(15, 5, 2),
(16, 6, 5),
(17, 6, 7),
(18, 6, 3),
(19, 7, 1),
(20, 7, 4);

-- --------------------------------------------------------

--
-- Table structure for table `inst_course`
--

CREATE TABLE IF NOT EXISTS `inst_course` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `instructor_id` int(3) NOT NULL,
  `course_id` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `inst_course`
--

INSERT INTO `inst_course` (`id`, `instructor_id`, `course_id`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 3, 1),
(4, 3, 3),
(5, 1, 6),
(6, 2, 7),
(7, 2, 2),
(8, 2, 10),
(9, 3, 6),
(10, 3, 12),
(11, 4, 12),
(12, 4, 5),
(13, 4, 6),
(14, 5, 1),
(15, 5, 9),
(16, 5, 10),
(17, 5, 5),
(18, 6, 3),
(19, 6, 4),
(20, 6, 8),
(21, 7, 2),
(22, 7, 5),
(23, 7, 6),
(24, 7, 7),
(25, 2, 11);

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE IF NOT EXISTS `level` (
  `level_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`level_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`level_id`, `description`) VALUES
(1, 'Beginner'),
(2, 'Medium'),
(3, 'Advanced'),
(4, 'Professional');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `address` varchar(1000) NOT NULL,
  `image_id` int(11) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `title`, `description`, `address`, `image_id`) VALUES
(1, 'Location', 'A few meters from Passeig de Gràcia you will find the IBERICUS GYM, the facilities and services needed for you to release your energy before and after work. The gym is located in the center of the city, a fitness room with all the cardio machines, free weights and muscle, as well as training material most innovative as kettlebells, medicine balls and Power Plate.\r\n\r\nThe gym is perfect for unwinding from the stress!', 'Ptge. Domingo, 6-8\r\n08007 Barcelona\r\nTel. 93 488 08 09', 27);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE IF NOT EXISTS `room` (
  `room_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`room_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `name`) VALUES
(1, 'Fitness Room'),
(2, 'Boxing Room'),
(3, 'Guided Activities Room 1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
