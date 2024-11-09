-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2024 at 03:22 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quickslot`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `doctor` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `name`, `email`, `date`, `time`, `reason`, `doctor`) VALUES
(1, 'Md mehedi hasan ', 'mehedi7hasan10134@gmail.com', '2024-10-31', '14:28:00', 'utyf', ''),
(2, 'md rabiul hasan ', 'mehedi7hasan10134@gmail.com', '2024-11-08', '14:32:00', 'sick , i thought i have fever\n', ''),
(3, 'Md mehedi hasan ', 'mehedi7hasan10134@gmail.com', '2024-11-08', '21:30:00', 'sdfsdf', ''),
(4, 'Md hasan ', 'hasan10134@gmail.com', '2024-09-04', '21:32:00', 'sdfdsf', ''),
(5, 'Mehedi Hasan', 'mehedi7hasan10134@gmail.com', '2024-11-07', '14:30:00', 'sqaxasx', ''),
(6, 'Mehedi Hasan', 'mehedi7hasan10134@gmail.com', '2024-11-05', '14:36:00', 'dqsawin siodfb sadfiou wqef', ''),
(7, 'Md mehedi hasan ', 'mehedi7hasan10134@gmail.com', '2024-11-13', '18:51:00', 'ascasdc', ''),
(8, 'Mehedi Hasan', 'mehedi7hasan10134@gmail.com', '2024-10-28', '14:55:00', 'sadasdcx', 'Dr. John Doe'),
(9, 'sjdfbsdf ', 'mehdfc@gmail.cno', '2024-11-06', '15:04:00', 'sdfio asiudfb sdfikj ', 'Dr. John Doemn.html'),
(10, 'Mehedi asudb', 'iosdfn@gmail.com', '2024-11-19', '19:03:00', 'sdfdsf', 'Dr. John Doe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
