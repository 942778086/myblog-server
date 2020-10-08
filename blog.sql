CREATE DATABASE `blog` /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `content` text,
  `views` int(10) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;