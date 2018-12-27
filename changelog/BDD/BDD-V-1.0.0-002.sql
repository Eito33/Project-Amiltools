-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 27 déc. 2018 à 23:42
-- Version du serveur :  10.1.37-MariaDB
-- Version de PHP :  7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `amiltools`
--
CREATE DATABASE IF NOT EXISTS `amiltools` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `amiltools`;

-- --------------------------------------------------------

--
-- Structure de la table `amil_bugtracker`
--

CREATE TABLE `amil_bugtracker` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `content` text COLLATE utf8mb4_bin NOT NULL,
  `priority` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `zone` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `context` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `assignedto` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `amil_report`
--

CREATE TABLE `amil_report` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `content` text COLLATE utf8mb4_bin NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `amil_task`
--

CREATE TABLE `amil_task` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `content` text COLLATE utf8mb4_bin NOT NULL,
  `priority` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `assignedto` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `end_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `amil_user`
--

CREATE TABLE `amil_user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_bin NOT NULL,
  `lastname` varchar(255) COLLATE utf8_bin NOT NULL,
  `mail` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `token` text COLLATE utf8_bin NOT NULL,
  `biographie` text COLLATE utf8_bin NOT NULL,
  `job` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT 'webdev',
  `grade` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `amil_user`
--

INSERT INTO `amil_user` (`id`, `firstname`, `lastname`, `mail`, `password`, `token`, `biographie`, `job`, `grade`) VALUES
(1, 'Gabin', 'Rimbault', 'grimbault@amiltone.fr', '$2a$10$bBmyLbEILJg7KByKjiM5GucxyfWXSHG7l3gm1OoGg1sWdujpyOW5O', '$2a$10$QYqhAKl57u6A8b/fvvlo0eggcIwmUmjpyXjXLQ9SRfcgoGrzpd8Xi', '', 'webdev', '$2a$10$rjsatU/1qIMXrVyCe9ct8OD/EEDlyNC1ZMZ4zJt8fJeUtMJRI3fj2');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `amil_bugtracker`
--
ALTER TABLE `amil_bugtracker`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `amil_report`
--
ALTER TABLE `amil_report`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `amil_task`
--
ALTER TABLE `amil_task`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `amil_user`
--
ALTER TABLE `amil_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `amil_bugtracker`
--
ALTER TABLE `amil_bugtracker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `amil_report`
--
ALTER TABLE `amil_report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `amil_task`
--
ALTER TABLE `amil_task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `amil_user`
--
ALTER TABLE `amil_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
