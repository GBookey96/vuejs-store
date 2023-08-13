-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2023 at 03:48 PM
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
-- Database: `mystore`
--
CREATE DATABASE IF NOT EXISTS `mystore` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mystore`;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `itemId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(25) NOT NULL,
  `categoryDescription` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryId`, `categoryName`, `categoryDescription`) VALUES
(1, 'Electronics & Gadgets', 'Discover the latest in cutting-edge technology and innovation with our Electronics & Gadgets collection. From sleek smartphones to powerful laptops, immersive headphones to smartwatches that keep you connected, our selection will elevate your digital lifestyle.'),
(2, 'Fashion & Apparel', 'Elevate your personal style with our Fashion & Apparel range. From timeless classics to trendy must-haves, find the perfect ensemble for any occasion. Explore our diverse selection of clothing, accessories, and beauty products designed to help you express your unique identity.'),
(3, 'Home & Living', 'Transform your living space into a sanctuary of comfort and elegance with our Home & Living collection. Explore a curated selection of chic furniture, stylish decor, and functional home essentials that breathe life into every room, making your house truly feel like a home.'),
(4, 'Health & Wellness', 'Prioritize your well-being with our Health & Wellness assortment. Embrace a holistic approach to a healthier you, featuring fitness equipment that energizes, skincare that rejuvenates, and supplements that nourish. Discover products that empower you to thrive both inside and out.'),
(5, 'Hobbies & Crafts', 'Unleash your creativity and passions with our Hobbies & Crafts selection. From aspiring artists to avid gardeners, board game enthusiasts to DIY aficionados, explore a world of hobbies that ignite joy and offer endless opportunities for self-expression and exploration.');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `productName` varchar(30) NOT NULL,
  `productDescription` varchar(1250) NOT NULL,
  `productStockLevel` int(11) NOT NULL,
  `productCategory` int(11) NOT NULL,
  `productPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productDescription`, `productStockLevel`, `productCategory`, `productPrice`) VALUES
(26, 'SuperTech Smartphone X', 'Experience the future with the SuperTech Smartphone X. Boasting a high-resolution display, powerful processor, and advanced camera features, this smartphone redefines your mobile experience.', 150, 1, '799.99'),
(27, 'TechHub Laptop Pro', 'Unleash your productivity with the TechHub Laptop Pro. Its lightning-fast performance and stunning graphics make multitasking a breeze, whether you\'re working or gaming.', 100, 1, '1299.99'),
(28, 'SonicPods Wireless Earbuds', 'Elevate your audio experience with SonicPods Wireless Earbuds. Crystal-clear sound, comfortable fit, and extended battery life redefine how you enjoy music on the go.', 300, 1, '129.00'),
(29, 'CamPro 4K Action Camera', 'Capture life\'s adventures in stunning detail with the CamPro 4K Action Camera. Waterproof and equipped with advanced stabilization, it\'s the perfect companion for thrill-seekers.', 75, 1, '249.99'),
(30, 'VRX Gaming Console Deluxe', 'Immerse yourself in virtual worlds with the VRX Gaming Console Deluxe. Experience gaming like never before with high-quality graphics and realistic gameplay.', 50, 1, '499.00'),
(31, 'Classic Elegance Dress', 'Embrace timeless elegance with the Classic Elegance Dress. Its sophisticated design and luxurious fabric make it perfect for formal occasions.', 50, 2, '149.99'),
(32, 'Urban Explorer Backpack', 'Stay stylish and organized with the Urban Explorer Backpack. Its sleek design and multiple compartments make it the ideal companion for urban adventures.', 100, 2, '79.00'),
(33, 'ActiveFlex Yoga Leggings', 'Achieve your fitness goals in comfort with ActiveFlex Yoga Leggings. Made from breathable fabric, they provide the flexibility you need during workouts.', 200, 2, '49.99'),
(34, 'Classic Oxford Men\'s Shirt', 'Elevate your everyday look with the Classic Oxford Men\'s Shirt. Its crisp design and superior quality fabric ensure a sophisticated appearance.', 150, 2, '79.99'),
(35, 'Trendy Street Sneakers', 'Step out in style with the Trendy Street Sneakers. Their unique design and comfortable fit make them a must-have addition to your casual wardrobe.', 300, 2, '89.00'),
(36, 'Zenith Wooden Coffee Table', 'Add a touch of elegance to your living room with the Zenith Wooden Coffee Table. Its minimalist design and quality craftsmanship bring sophistication to your space.', 30, 3, '299.00'),
(37, 'CozyNest Throw Blanket', 'Stay warm and cozy with the CozyNest Throw Blanket. Its soft texture and inviting colors make it perfect for chilly evenings on the couch.', 100, 3, '39.99'),
(38, 'CulinaryMaster Chef\'s Knife Se', 'Elevate your culinary skills with the CulinaryMaster Chef\'s Knife Set. Razor-sharp blades and ergonomic handles make meal preparation a breeze.', 50, 3, '149.00'),
(39, 'Lumina Floor Lamp', 'Illuminate your space with the Lumina Floor Lamp. Its modern design and adjustable lighting create the perfect ambiance for any room.', 75, 3, '129.99'),
(40, 'Botanical Bliss Indoor Plants ', 'Bring the outdoors in with the Botanical Bliss Indoor Plants Set. These vibrant and easy-to-care-for plants add a refreshing touch to your home decor.', 200, 3, '59.99'),
(41, 'FitFlex Smart Fitness Tracker', 'Monitor your health and stay active with the FitFlex Smart Fitness Tracker. Track your steps, heart rate, and more to achieve your wellness goals.', 200, 4, '79.99'),
(42, 'NutriBlend Pro Blender', 'Blend your way to a healthier lifestyle with the NutriBlend Pro Blender. Create nutritious smoothies and shakes packed with essential nutrients.', 100, 4, '89.00'),
(43, 'SereneDream Lavender Essential', 'Find relaxation and balance with SereneDream Lavender Essential Oil. Its calming aroma is perfect for aromatherapy and unwinding after a long day.', 300, 4, '24.99'),
(44, 'Revitalize Yoga Mat', 'Recharge your mind and body with the Revitalize Yoga Mat. Its non-slip surface and comfortable padding provide the support you need during your yoga practice.', 150, 4, '39.00'),
(45, 'Renewal Spa Set', 'Indulge in a spa-like experience at home with the Renewal Spa Set. Relax and rejuvenate with a collection of pampering essentials.', 50, 4, '99.99'),
(46, 'Masterpiece Acrylic Paint Set', 'Unleash your creativity with the Masterpiece Acrylic Paint Set. Vibrant colors and high-quality pigments make every painting a work of art.', 100, 5, '29.99'),
(47, 'GreenThumb Gardening Kit', 'Cultivate your own garden oasis with the GreenThumb Gardening Kit. From herbs to flowers, grow your favorite plants with ease.', 75, 5, '49.00'),
(48, 'Crafters\' Haven DIY Kit', 'Embark on creative projects with the Crafters\' Haven DIY Kit. From jewelry-making to scrapbooking, this kit has everything you need to express yourself.', 150, 5, '39.99'),
(49, 'Enigma Puzzle Collection', 'Challenge your mind with the Enigma Puzzle Collection. Explore a variety of brain-teasing puzzles that provide hours of entertainment.', 200, 5, '19.99'),
(50, 'VintageTreasures Collectibles ', 'Discover the allure of the past with the VintageTreasures Collectibles Set. Curate your collection of unique and nostalgic items.', 50, 5, '59.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `userEmail` varchar(30) NOT NULL,
  `userPassword` varchar(1000) NOT NULL,
  `userRole` enum('User','Admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `userEmail`, `userPassword`, `userRole`) VALUES
(2, 'Gershon Bookey', 'gershon@gershon.com', '0f85d418a2bb929d8a6bf388999238642771282123c04f50baaeb77e72cd31e6edd7bfa6a21724b0fcb5d5f78590cad0561f5f4a0145900115c361f76e8cb588', 'Admin'),
(8, 'Baily Bookey', 'baily@baily.com', 'c0ad47f9177bf2dc3dd38cc0c3b7f4bb31dabd8ce466ef9eebd772339781fca162335c392791e152240c70d62c0eafa0a9ec25945d1c7cc972c27557902b6f3c', 'User'),
(10, 'yanky bookey', 'yanky@yanky.com', 'cc865da4cd70fb2fa35dd614721eb7316e6a8b4fce4877e104c2ab7a78228d957a1e13a62c7e2e6f7582ee082392e45dc46a4d604be5f8413f0abd0bfd8321de', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`itemId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `productCategory` (`productCategory`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `itemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`productCategory`) REFERENCES `categories` (`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
