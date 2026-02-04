-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2026 at 02:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contactformdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `subject`, `message`, `submitted_at`) VALUES
(1, 'Ry', 'NinongRy@gmail.com', 'Web Creation', 'Can I hire you to create a website for our expanding media influence for cooking, we want you to create website relates to cook. The perfect bite pareehh', '2024-12-09 07:36:19'),
(2, 'Roger', 'UncleRoger@bogart.com', 'Web creation', 'Fuyiooohh', '2024-12-09 08:20:14'),
(3, 'Gordon', 'Gordonramsey@gmail.com', 'Web design', 'I want to hire you as my designer for my soon webpage', '2024-12-10 00:50:29'),
(4, 'test', 'test@nmsc.edu.ph', 'test', 'taegaegaegae TESTINGGG', '2024-12-10 23:33:21'),
(5, 'test', 'test@nmsc.edu.ph', 'test', 'taegaegaegae TESTINGGG', '2024-12-10 23:33:29'),
(6, 'testing', 'TESTING@GMAIL.COM', 'TRIAL', 'TRY FOR 3RD TIME', '2024-12-10 23:36:41'),
(7, '4thTest', 'TEST4TH@GMAIL.COM', '4TH', '4TH TIME IS A CHARM', '2024-12-10 23:40:15'),
(8, '5thTest', 'TEST5TH@GMAIL.COM', '5TH', '5TH TIME IS A CHARM', '2024-12-10 23:40:35'),
(9, 'JJBAREA', 'LEBRON@NMSCS.EDU.PH', 'TEST', 'kakaeng', '2024-12-10 23:43:34'),
(10, 'Finaltest', 'FinalTESTING@GMAIL.COM', 'FINAL', 'LAST TESTING', '2024-12-11 00:05:04'),
(11, '', '', '', '', '2026-02-04 00:24:59'),
(12, 'Vanilla', 'vanilla@gmail.com', 'vanil', 'vanilla make myself believeee', '2026-02-04 00:30:47'),
(13, 'lauv', 'Lauv@yahoo.com', 'Lauv', 'LauvMe', '2026-02-04 00:38:41'),
(14, 'Bruno', 'Mars@Earth.com', 'Mars', 'Mars', '2026-02-04 00:45:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
