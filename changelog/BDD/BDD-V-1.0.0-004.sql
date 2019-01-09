-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 09 jan. 2019 à 23:50
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
CREATE DATABASE IF NOT EXISTS `amiltools` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `amiltools`;

-- --------------------------------------------------------

--
-- Structure de la table `amil_api_key`
--

CREATE TABLE `amil_api_key` (
  `id` int(11) NOT NULL,
  `api_key` varchar(255) NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `amil_api_key`
--

INSERT INTO `amil_api_key` (`id`, `api_key`, `available`, `id_user`) VALUES
(1, 'C$mOwJzA37bvnoMm2ogE7rCRb60jNA', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `amil_bugtracker`
--

CREATE TABLE `amil_bugtracker` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `priority` varchar(255) NOT NULL,
  `zone` varchar(255) NOT NULL,
  `context` varchar(255) NOT NULL,
  `assignedto` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `amil_report`
--

CREATE TABLE `amil_report` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `amil_report`
--

INSERT INTO `amil_report` (`id`, `title`, `content`, `author`, `create_at`) VALUES
(1, 'Compte Rendu de Clément Berthouin', '# Titre\n## Sous-Titre \n### Titre plus profond\n\nAttributs *italique*, **gras**, \n`monospace`, ~~rayé~~.\n\nListe:\n\n  * HTML5\n  * CSS3\n  * Javascript\n\nListe numérotée:\n\n  1. React\n  2. NodeJS\n  3. FireBase\n\n *[Amiltools](https://github.com/Eito33)* \n\n Lien automatique : https://github.com/Eito33 \n\n```\n console.log(&quot;hello&quot;); \n``` ', 'Gabin Rimbault', '2019-01-08 19:50:11');

-- --------------------------------------------------------

--
-- Structure de la table `amil_role`
--

CREATE TABLE `amil_role` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `value` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `amil_role`
--

INSERT INTO `amil_role` (`id`, `role`, `value`) VALUES
(1, 'User', 25),
(2, 'Manager', 50),
(3, 'Admin', 100);

-- --------------------------------------------------------

--
-- Structure de la table `amil_task`
--

CREATE TABLE `amil_task` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `priority` varchar(255) NOT NULL,
  `assignedto` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `end_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `amil_user`
--

CREATE TABLE `amil_user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` text NOT NULL,
  `biographie` varchar(500) DEFAULT 'Voici ma biographie !',
  `job` varchar(255) NOT NULL DEFAULT 'webdev',
  `role` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL DEFAULT 'Niort',
  `api_key` varchar(50) DEFAULT 'noapikey'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `amil_user`
--

INSERT INTO `amil_user` (`id`, `firstname`, `lastname`, `mail`, `password`, `token`, `biographie`, `job`, `role`, `team`, `api_key`) VALUES
(1, 'Gabin', 'Rimbault', 'grimbault@amiltone.fr', '$2a$10$xYmgCDq1Q7AKUKC.o/zZL.3yLWJpciybXreoJ4mzpgBs.tWKBMjiq', '9FW!5$$cg1r0OO7RCrKg1kC3sgIj6xBi8EV5SBYPTohANwgLAH', '# Profil de Gabin Rimbault', 'webdev', 'Admin', 'Niort', 'C$mOwJzA37bvnoMm2ogE7rCRb60jNA');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `amil_api_key`
--
ALTER TABLE `amil_api_key`
  ADD PRIMARY KEY (`id`);

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
-- Index pour la table `amil_role`
--
ALTER TABLE `amil_role`
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
-- AUTO_INCREMENT pour la table `amil_api_key`
--
ALTER TABLE `amil_api_key`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `amil_bugtracker`
--
ALTER TABLE `amil_bugtracker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `amil_report`
--
ALTER TABLE `amil_report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `amil_role`
--
ALTER TABLE `amil_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
