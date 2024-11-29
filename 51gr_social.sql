-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2024 at 05:21 PM
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
-- Database: `51gr_social`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `text` varchar(1337) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `likes_count` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `dislikes_count` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `love_count` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `comment_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `text`, `user_id`, `created_at`, `likes_count`, `dislikes_count`, `love_count`, `comment_count`) VALUES
(1, '156', 1, '2024-10-30 17:24:41', 0, 0, 0, 0),
(2, 'asdadadsadd', 3, '2024-10-30 22:48:06', 0, 0, 0, 0),
(3, '😎😎😎😎', 1, '2024-10-31 09:16:52', 0, 0, 0, 0),
(4, '🤗🤗', 1, '2024-10-31 09:18:54', 0, 0, 0, 0),
(5, '🐿🦎🦎🦎🦎', 1, '2024-10-31 09:24:47', 0, 0, 0, 0),
(6, 'lietuviškų raidžių testas ąčęįįšųū', 1, '2024-10-31 09:27:46', 0, 0, 0, 0),
(7, 'pirmas postas', 1, '2024-10-31 09:48:37', 0, 0, 0, 0),
(8, 'postas by 123123', 4, '2024-10-31 11:28:23', 0, 0, 0, 0),
(9, 'testas 11-04', 1, '2024-11-04 11:16:16', 0, 0, 0, 0),
(10, 'naujas įrašas', 1, '2024-11-04 12:47:16', 0, 0, 0, 0),
(11, 'naujas įrašas 2', 1, '2024-11-04 12:53:59', 0, 0, 0, 0),
(12, 'dabar veikia', 5, '2024-11-05 13:07:47', 0, 0, 0, 0),
(13, '                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis. A, eveniet iste delectus consequuntur ducimus aperiam quas est. Laborum fugiat illum blanditiis inventore rerum optio dolores sapiente officiis iure labore. Perferendis culpa alias sunt? Culpa perferendis corporis recusandae dolorem omnis deserunt possimus beatae eveniet ad rem modi eos, repellat magni harum non ducimus suscipit? Quia, quo illum blanditiis architecto magni aperiam incidunt! Velit et dicta molestiae porro fuga iste suscipit assumenda ex tenetur, tempora perferendis adipisci.', 1, '2024-11-05 13:55:50', 0, 0, 0, 0),
(14, '                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis. A, eveniet iste delectus consequuntur ducimus aperiam quas est. Laborum fugiat illum blanditiis inventore rerum optio dolores sapiente officiis iure labore. Perferendis culpa alias sunt? Culpa perferendis corporis recusandae dolorem omnis deserunt possimus beatae eveniet ad rem modi eos, repellat magni harum non ducimus suscipit? Quia, quo illum blanditiis architecto magni aperiam incidunt! Velit et dicta molestiae porro fuga iste suscipit .', 1, '2024-11-05 13:59:51', 0, 0, 0, 0),
(15, '                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis. A, eveniet iste delectus consequuntur ducimus aperiam quas est. Laborum fugiat illum blanditiis inventore rerum optio dolores sapiente officiis iure labore. Perferendis culpa alias sunt? Culpa perferendis corporis recusandae dolorem omnis deserunt possimus beatae eveniet ad rem modi eos, repellat magni harum non ducimus suscipit? Quia, quo illum blanditiis architecto magni aperiam incidunt! Velit et dicta molestiae porro fuga iste suscipit assumenda ex tenetur, tempora perferendis adipisci.                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis. A, eveniet iste delectus consequuntur ducimus aperiam quas est. Laborum fugiat illum blanditiis inventore rerum optio dolores sapiente officiis iure labore. Perferendis culpa alias sunt? Culpa perferendis corporis recusandae dolorem omnis deserunt possimus beatae eveniet ad rem modi eos, repellat magni harum non ducimus suscipit? Quia, quo ', 1, '2024-11-05 14:00:29', 0, 0, 0, 0),
(16, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium', 1, '2024-11-05 14:29:51', 0, 0, 0, 0),
(17, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis. A, eveniet iste delectus consequuntur ducimus aperiam quas est. Laborum fugiat illum blanditiis inventore rerum optio dolores sapiente officiis iure labore. Perferendis culpa alias sunt? ', 1, '2024-11-05 14:30:14', 0, 0, 0, 0),
(18, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis.', 1, '2024-11-05 14:31:22', 0, 0, 0, 0),
(19, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut recusandae iste doloribus sapiente sequi nostrum ad ea dolor, ex id. Consequatur at dolor, dolorem suscipit ab dolore quasi praesentium delectus repellat perspiciatis. A, eveniet iste delectus consequuntur ducimus aperiam quas est.', 1, '2024-11-05 15:18:56', 0, 0, 0, 0),
(20, 'aliooooooooo', 1, '2024-11-05 17:21:43', 0, 0, 0, 0),
(21, 'Ksena Lucy Lawless', 6, '2024-11-06 12:19:36', 0, 0, 0, 0),
(22, 'išskleidus daugiau teksta mažiau nerodo', 1, '2024-11-07 09:16:01', 0, 0, 0, 0),
(23, 'admin is here!!', 1, '2024-11-11 11:21:33', 0, 0, 0, 0),
(24, 'hello admin', 5, '2024-11-11 11:22:07', 0, 0, 0, 0),
(25, 'naujas post to check database if updates', 5, '2024-11-13 11:43:32', 0, 0, 0, 0),
(26, 'test', 5, '2024-11-13 11:47:18', 0, 1, 0, 0),
(27, 'im again here', 4, '2024-11-13 11:48:43', 1, 1, 1, 0),
(28, '20-tas postas', 1, '2024-11-14 13:07:38', 0, 0, 0, 0),
(29, 'Pedro!!!!!!', 12, '2024-11-22 11:09:58', 0, 0, 0, 0),
(30, '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, aliquid rerum, ullam fugit non facilis, debitis vitae accusamus explicabo quam illum. Recusandae placeat ratione dolorem nihil aspernatur facere voluptatibus sunt delectus non. Recusandae ab enim id voluptatibus excepturi voluptate, quidem officia obcaecati nesciunt totam earum veniam ut atque debitis maxime necessitatibus voluptatem explicabo. Ipsam numquam, ut vitae aspernatur labore itaque, dolore magnam saepe possimus illum hic alias pariatur a assumenda adipisci fugiat modi omnis. Laborum esse quae asperiores sit molestiae rerum vel sapiente nulla eveniet maiores ipsa adipisci magni dolorem consectetur nesciunt voluptate, praesentium accusamus ratione doloribus accusantium alias repellendus. Excepturi iure veritatis optio placeat quos explicabo officiis repellat. Fugit incidunt eum omnis quos fuga, earum ipsum nemo pariatur doloremque at consequuntur autem quis nesciunt amet ducimus sapiente nam! Officia deserunt quae blanditiis assumenda autem dolorum, nulla neque sapiente cumque eum. Tempore necessitatibus veritatis libero repudiandae dignissimos tempora ipsam quae!', 1, '2024-11-27 16:10:02', 0, 0, 0, 0),
(31, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, aliquid rerum, ullam fugit non facilis, debitis vitae accusamus explicabo quam illum. Recusandae placeat ratione dolorem nihil aspernatur facere voluptatibus sunt delectus non.', 1, '2024-11-27 16:21:49', 0, 0, 0, 0);

--
-- Triggers `posts`
--
DELIMITER $$
CREATE TRIGGER `update_post_count_on_insert` AFTER INSERT ON `posts` FOR EACH ROW BEGIN
    UPDATE users 
    SET post_count = post_count + 1 
    WHERE id = NEW.user_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `post_reactions`
--

CREATE TABLE `post_reactions` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `reaction_type_id` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `post_reactions`
--

INSERT INTO `post_reactions` (`id`, `user_id`, `post_id`, `reaction_type_id`) VALUES
(5, 12, 28, 3),
(6, 12, 29, 3);

-- --------------------------------------------------------

--
-- Table structure for table `reaction_types`
--

CREATE TABLE `reaction_types` (
  `id` int(1) UNSIGNED NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `reaction_types`
--

INSERT INTO `reaction_types` (`id`, `name`) VALUES
(1, 'like'),
(2, 'dislike'),
(3, 'love');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(1) UNSIGNED NOT NULL,
  `role` char(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` char(20) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `token`, `user_id`, `created_at`) VALUES
(1, 'aw0BAjPPYAabjupiQPUQ', 1, '2024-10-30 17:24:25'),
(2, 'CLmiDxsZz2ukUyzKe888', 3, '2024-10-30 22:47:56'),
(3, 'BZRS1egKToovLPROh41H', 1, '2024-10-31 08:50:45'),
(4, 'NMj76lYwZB8ic638mVNx', 1, '2024-10-31 08:51:20'),
(5, 'l5jW4U6BVaLUqzmGrtuE', 1, '2024-10-31 09:16:20'),
(6, '2D6eHfPkbYIoVEgKoZLe', 1, '2024-10-31 09:48:29'),
(7, '8iiQD32THYzLBdLTp6D2', 1, '2024-10-31 10:05:47'),
(8, 'pNGA5m6xi3lbytO2l00x', 4, '2024-10-31 11:28:07'),
(9, '6IKkmH7k3iOyYY2FyjPT', 1, '2024-11-04 08:49:35'),
(10, 'ZnBNAREs2pPYwEoX9A6I', 1, '2024-11-04 11:15:43'),
(11, 'zrDejID1QQSXN5p76DhH', 1, '2024-11-04 12:40:14'),
(12, 'b65jcyZAwpXDP9y3mhQe', 1, '2024-11-04 12:55:19'),
(13, 'QBnxjonVx0faqfiWuo6q', 1, '2024-11-04 13:08:33'),
(14, 'si2KUHHFS6H0mI74qJkr', 1, '2024-11-04 13:11:05'),
(15, 'dGs0qU6KwAlCR0GLnt9L', 1, '2024-11-05 10:05:37'),
(16, '8vFaIZea6C8yoe5eOy6o', 1, '2024-11-05 10:05:42'),
(17, 'yzv5u1YDIy7ZNapYtWxe', 1, '2024-11-05 12:42:05'),
(18, 'lW6gvKbvifn76c3b6Wj5', 5, '2024-11-05 12:45:52'),
(19, '4nLdDKgbhz2lqRccsshc', 5, '2024-11-05 12:58:44'),
(20, '46iaaIN94aZjlRdGdYbz', 1, '2024-11-05 13:35:00'),
(21, 'jloSiBPHCuHyWmNCKRRl', 1, '2024-11-05 13:50:53'),
(22, 'nPlUXaWAxT7WnXQw1URb', 1, '2024-11-05 14:08:08'),
(23, 'pKHm7hhvVwqKrkCiRmSM', 1, '2024-11-05 14:28:26'),
(24, 'TF3rYRbk4J3ZG7x2FBIQ', 1, '2024-11-05 14:48:06'),
(25, 'j8KcOwui7BMq4PHQSoAg', 1, '2024-11-05 15:14:16'),
(26, '0gFjSN01GDSc1dj1p2gc', 1, '2024-11-05 15:17:12'),
(27, 'BtilL34rNMI4iidVwK8n', 1, '2024-11-05 17:08:08'),
(28, 'Hpa66pDLRiRBISoSb9a9', 1, '2024-11-05 17:26:43'),
(29, 'TeCrc2uMPuljAlxvhjby', 1, '2024-11-05 17:43:44'),
(30, '1qDc754SX1SWg7SPw3uT', 1, '2024-11-06 08:44:43'),
(31, 'FKe5Z36XzyVipu2xPIHf', 1, '2024-11-06 12:00:49'),
(32, 'bF2NcYthQCzufvSuklRY', 1, '2024-11-06 12:18:14'),
(33, 'IDR0Ax2KGuHhio4Zb3ai', 6, '2024-11-06 12:19:24'),
(34, 'wsGsKVYf7uU0hInztNBQ', 1, '2024-11-07 09:15:05'),
(35, 'aF34qbIt8HqfJFM0auO9', 1, '2024-11-07 10:21:25'),
(36, 'PfUMQWFPtgUOHxAbbvhe', 1, '2024-11-07 11:42:51'),
(37, 'dpCveNsGs88Y6AFrFhqD', 1, '2024-11-07 11:58:36'),
(38, '1sxL6kWYRRTgn1WMpN3J', 1, '2024-11-07 12:14:05'),
(39, 'xLOLBCU6wQpou52QA5uv', 1, '2024-11-11 08:41:09'),
(40, 'alujDCLzHiYre2g7DWW6', 1, '2024-11-11 11:21:08'),
(41, '6a5S5oh0HDm80VzOfLui', 5, '2024-11-11 11:22:04'),
(42, 'sRlIB0H0jAHesfUU5Y9b', 1, '2024-11-11 11:22:35'),
(43, 'RB9chSQGwZ5Q1ptEyfdt', 1, '2024-11-12 08:51:19'),
(44, '1DYF5KpI2VO5Jj2IZ09S', 1, '2024-11-12 09:07:12'),
(45, 'OLRVP990GYytoGXxaGX8', 1, '2024-11-12 10:24:38'),
(46, 'jk2MGTv6ikXx4ibl829k', 1, '2024-11-12 10:41:53'),
(47, 'rlsFNbLQG86IUeoM7Rum', 1, '2024-11-12 12:29:21'),
(48, 'F8axIU2Z2MuDeQ80Y374', 1, '2024-11-12 12:44:26'),
(49, '3htrZ5nKFG1sS0Ld1B4D', 1, '2024-11-12 13:02:07'),
(50, 'aU98dzsGfWQKSFtGrcqE', 1, '2024-11-13 08:46:07'),
(51, 'YwbcAMnTEeG1obIuuRc4', 1, '2024-11-13 10:44:48'),
(52, 'p7RFzAzyzzJ8y3hTY6zU', 1, '2024-11-13 11:10:11'),
(53, '54w32X8NQqEHhMU9ZXlK', 1, '2024-11-13 11:10:28'),
(54, 'U1Gil55JGePijByrerla', 1, '2024-11-13 11:10:45'),
(55, 'LtEhXsAgf92TAzMbS94g', 5, '2024-11-13 11:11:14'),
(56, 'Y4HKjMu98HTdcDYS8tsG', 1, '2024-11-13 11:11:31'),
(57, 'XW6O8nJP9S70FmJpAZvT', 1, '2024-11-13 11:33:03'),
(58, '2U7S1UfVBZ0oaviD6Rqf', 1, '2024-11-13 11:38:10'),
(59, '6yuMltsJ9yCbA7d6JTX3', 1, '2024-11-13 11:42:20'),
(60, 'z09XoWjoHmE4wqPIxBAP', 1, '2024-11-13 11:43:07'),
(61, 'fWnQTbpBpFamdynYC2Jq', 5, '2024-11-13 11:43:21'),
(62, 'g2wG4UajMDNTnYD642I7', 4, '2024-11-13 11:48:37'),
(63, 'lNtlZvjPIYvg25BTzcrD', 1, '2024-11-13 11:51:04'),
(64, 'XPfnW3HVmiFEYwaomaDU', 1, '2024-11-13 12:05:18'),
(65, 'GJKiuS6vGMWP6seGEQOX', 1, '2024-11-13 12:05:35'),
(66, 'KG4LaiB8LmJNHh0kTXVG', 1, '2024-11-13 12:09:43'),
(67, 'WoQtkmjbktJSrAcjfRe2', 1, '2024-11-13 12:14:33'),
(68, 'rhGSz3GzSRXNBwCr7eP1', 7, '2024-11-13 12:27:40'),
(69, 'aCHvY92WLc6bw9KO9710', 1, '2024-11-13 12:28:22'),
(70, 'CqXaRYkvXOPTb05zElhU', 1, '2024-11-13 12:42:55'),
(71, 'jk0YbqorevlHcWvxQDrF', 1, '2024-11-13 12:46:31'),
(72, 'Sc7J0tY9ytV5gc3eF4r8', 1, '2024-11-13 13:01:42'),
(73, 'LZtlNa4rxi7pAS3Owwv9', 1, '2024-11-13 13:10:51'),
(74, 'ynGKovMEP041exZGkl0N', 1, '2024-11-13 13:45:30'),
(75, 'cFX3eZ30eq3TVO3w4nAg', 1, '2024-11-13 13:54:58'),
(76, 'jgDTK42895d28thnBU6m', 1, '2024-11-13 14:08:19'),
(77, 'mk83CT4e2kOhWs6MhBLK', 1, '2024-11-13 14:08:36'),
(78, 'O5ilLM8hBI1zSOIVeVXx', 1, '2024-11-13 14:08:40'),
(79, 'zxGtiAOaQXPnusgcqcfr', 1, '2024-11-14 09:13:26'),
(80, 'nio1bOvjj6y61g7Fojfp', 1, '2024-11-14 12:54:29'),
(81, 'v1StLnGr3JyqYjXgaIPe', 1, '2024-11-14 12:54:45'),
(82, 'T8rGeUb7Prkxe756hplJ', 1, '2024-11-14 12:54:48'),
(83, 'AwW9imeppYnU7fgoEvDH', 1, '2024-11-14 12:57:03'),
(84, 'M8mGs4kEk06jdxXppVqY', 1, '2024-11-14 13:14:28'),
(85, 'RpOzrjUS5RUtgZX97wKx', 1, '2024-11-18 08:34:14'),
(86, 'piX6eCeuQOOhMZQroual', 1, '2024-11-18 08:50:13'),
(87, 'QEicIcAUt3g23u7Y4VCh', 1, '2024-11-18 09:05:17'),
(88, 'BuOnElVAy69H2Ry8Tzzv', 1, '2024-11-18 09:49:39'),
(89, 'nNDKOouL8JMwPxQuBbd8', 1, '2024-11-18 09:51:39'),
(90, 'k9GY6RxQ27o5iAhaNzzq', 1, '2024-11-18 13:29:57'),
(91, 'Ho9KKoffCGyQ2ThzUjHj', 1, '2024-11-19 08:37:44'),
(92, '9wwzhC9UT74zlPEtNYdZ', 1, '2024-11-19 12:48:17'),
(93, '23dwUqFc5psF6rVdvc1t', 11, '2024-11-19 12:49:50'),
(94, 'AI5Mrv4UP2zjFUL4v5s6', 1, '2024-11-19 12:55:34'),
(95, 'yOS6iTTlPvYdbqKy51pj', 1, '2024-11-20 11:38:19'),
(96, 'BFI9nrbkQvITir3140Rg', 1, '2024-11-21 12:43:35'),
(97, 'VD9N34L115QzbDGn1zAg', 1, '2024-11-22 09:57:47'),
(98, 'y8MjELbM4GkNdbajkCo2', 12, '2024-11-22 11:05:30'),
(99, 'biBa2MJGFNE4XXW6J2he', 1, '2024-11-22 11:05:49'),
(100, 'DRBLLa6uuzDWbOtk5ZWD', 12, '2024-11-22 11:05:58'),
(101, 'z0SutJG4NfptYgW3cIst', 1, '2024-11-22 12:29:10'),
(102, 'yNSFixFAYNs5ONBVlSWv', 11, '2024-11-22 12:30:01'),
(103, 'XuGLRuDqvnasWGc5y28Z', 12, '2024-11-22 12:30:34'),
(104, 'O3t0qXqIlHu3QwK0TaXO', 11, '2024-11-22 12:30:52'),
(105, 'gKGHrvNJy2wO7RpfGcdh', 1, '2024-11-22 12:30:57'),
(106, '6pmDQXigaXqYgSO4PIMW', 1, '2024-11-25 12:30:38'),
(107, 'C067BUax5DrkcFtmoAWg', 1, '2024-11-25 13:12:24'),
(108, '8oO9nsXfCS4d0n0s0Oa6', 1, '2024-11-25 13:21:54'),
(109, 'aJDEPeW2bbi54FRyfXBy', 1, '2024-11-25 13:22:09'),
(110, 'PFKpLdjURmEwtSqkP3e2', 1, '2024-11-27 12:30:30'),
(111, 'mXyQnIfNV4KtGiYV28WL', 1, '2024-11-27 13:17:07'),
(112, '1ND19N0qWSMpLv7AN3dw', 1, '2024-11-27 13:28:47'),
(113, 'aMuWVEpuazNvnKOS55YF', 1, '2024-11-27 13:40:35'),
(114, 'jajRgd93HoKV6kWW47yl', 11, '2024-11-27 13:58:09'),
(115, 'vq67RZMreWPcRXgsenk1', 1, '2024-11-27 13:59:37'),
(116, '6kkxrLdReIRrMvtkslPW', 1, '2024-11-27 17:04:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(1) UNSIGNED NOT NULL DEFAULT 2,
  `username` varchar(60) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password_hash` char(128) NOT NULL,
  `profile_image` char(68) DEFAULT NULL,
  `registered_at` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(1) UNSIGNED NOT NULL DEFAULT 1,
  `post_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `username`, `email`, `password_hash`, `profile_image`, `registered_at`, `status`, `post_count`) VALUES
(1, 1, 'chuck', 'chuck@norris.com', 'd96edb4522c1af63bc1e09987c24bdaed07ce9cd1240c314ee218f554222f8ba451e6147dab22bf552c18d6be0e89040913aeb32560f6eaed332eea0f2439406', 'http://localhost:5114/img/users/profile-1730974503118-987950089.jpg', '2024-10-30 17:17:38', 2, 22),
(3, 2, 'lol_1732013794517_deactivated', 'lol@lol_1732013794517_deactivated', '', NULL, '2024-10-30 22:47:41', 1, 1),
(4, 2, '123_1732013795709_deactivated', '123@123_1732013795709_deactivated', '', NULL, '2024-10-31 11:27:44', 1, 2),
(5, 2, 'maryte', 'maryte@martyte', '38a126c7de8b105db7961562af87181c9650eee3c9c12fbcd08f345ebd131aef3daf4786714c637f85c2ef42e4b0a714d70e82d7d7b195e3f4abeb474209400e', NULL, '2024-11-05 12:45:47', 1, 4),
(6, 2, 'Ksena', 'xena@xena', '1da70df2c1b537021ec6372313ae44fe3e1374d1ee38bc9564361695320d384cf1d572f336d1ce88c0107e038846422d4ba679b4b84c728e2a6503475c0c8abb', 'http://localhost:5114/img/users/xena.webp', '2024-11-06 12:19:17', 1, 1),
(7, 2, 'test_1731926522624_deactivated', 'test@test_1731926522624_deactivated', '1b0a1df0eefddf440e7c4b2f17cbb3816d64e27509992d9e16065df075bbc7aaca4437f54b147d95b4060dae6ecd3fda38e207791e7f3de27f0b8dc37d49dd3c', NULL, '2024-11-13 12:27:36', 1, 0),
(11, 2, 'maryteas', 'maryte1@martyte.com', 'f9e77bdffef6b850fb13cd7f892de2faa2a1018358c319c954e31c1ad7e79957fe8664348120fb155d4f9968a9305b5ab15faf655073ca0f67cd6f7f86327930', NULL, '2024-11-19 12:49:44', 2, 0),
(12, 2, 'Pedro Racoon', 'pedro@pedro.pedro', '763922cd8b2c6819fb3b8241e02c99d1ee96126b65d545e915558ad0276c1be5555069ee3e7846ee00b1dfd33b9d2fc4bf0fb92d14f9a46172c6c819d0cc1bbe', 'http://localhost:5114/img/users/profile-1732266426946-653496277.webp', '2024-11-22 11:05:25', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_status`
--

CREATE TABLE `user_status` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` char(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `user_status`
--

INSERT INTO `user_status` (`id`, `name`) VALUES
(1, 'initial'),
(2, 'active'),
(3, 'blocked');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `post_reactions`
--
ALTER TABLE `post_reactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `reaction_type_id` (`reaction_type_id`);

--
-- Indexes for table `reaction_types`
--
ALTER TABLE `reaction_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `profile_image` (`profile_image`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `user_status`
--
ALTER TABLE `user_status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `post_reactions`
--
ALTER TABLE `post_reactions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `reaction_types`
--
ALTER TABLE `reaction_types`
  MODIFY `id` int(1) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(1) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_status`
--
ALTER TABLE `user_status`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `post_reactions`
--
ALTER TABLE `post_reactions`
  ADD CONSTRAINT `post_reactions_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `post_reactions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `post_reactions_ibfk_3` FOREIGN KEY (`reaction_type_id`) REFERENCES `reaction_types` (`id`);

--
-- Constraints for table `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`status`) REFERENCES `user_status` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
