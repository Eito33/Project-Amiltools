-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 17 jan. 2019 à 16:49
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
(1, 'C$mOwJzA37bvnoMm2ogE7rCRb60jNA', 1, 1),
(5, 'zp$vCiNXdN!vht3YoC9N01g$6AS$qD', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `amil_astuce`
--

CREATE TABLE `amil_astuce` (
  `id` int(11) NOT NULL,
  `astuce` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `amil_astuce`
--

INSERT INTO `amil_astuce` (`id`, `astuce`) VALUES
(1, 'Des serpents, il fallait que ce soit des serpents !'),
(2, 'Je suis mon cher ami, très heureux de te voir.'),
(3, 'N\'oubliez pas de faire votre RA avant le 15 !');

-- --------------------------------------------------------

--
-- Structure de la table `amil_bugtracker`
--

CREATE TABLE `amil_bugtracker` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `priority` varchar(50) NOT NULL,
  `id_user` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tags` varchar(255) NOT NULL,
  `archive` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `amil_bugtracker`
--

INSERT INTO `amil_bugtracker` (`id`, `title`, `content`, `priority`, `id_user`, `create_at`, `tags`, `archive`) VALUES
(1, 'Problème avec React sur le profile USER', '# Titre\r\n## Sous-Titre \r\n### Titre plus profond\r\n\r\nAttributs *italique*, **gras**, \r\n`monospace`, ~~rayé~~.\r\n\r\nListe:\r\n\r\n  * HTML5\r\n  * CSS3\r\n  * Javascript\r\n\r\nListe numérotée:\r\n\r\n  1. React\r\n  2. NodeJS\r\n  3. FireBase\r\n\r\n *[Amiltools](https://github.com/Eito33)* \r\n\r\n Lien automatique : https://github.com/Eito33 \r\n\r\n```\r\n console.log(&quot;hello&quot;); \r\n``` ', 'Medium', 2, '2019-01-10 10:16:58', 'React', 0),
(2, 'Problème avec React sur le profile USER', '# Titre\r\n## Sous-Titre \r\n### Titre plus profond\r\n\r\nAttributs *italique*, **gras**, \r\n`monospace`, ~~rayé~~.\r\n\r\nListe:\r\n\r\n  * HTML5\r\n  * CSS3\r\n  * Javascript\r\n\r\nListe numérotée:\r\n\r\n  1. React\r\n  2. NodeJS\r\n  3. FireBase\r\n\r\n *[Amiltools](https://github.com/Eito33)* \r\n\r\n Lien automatique : https://github.com/Eito33 \r\n\r\n```\r\n console.log(&quot;hello&quot;); \r\n``` ', 'Low', 2, '2019-01-10 10:18:06', 'React', 0),
(8, 'Pour clément !', 'azdazd', 'Low', 2, '2019-01-17 13:47:22', 'azdazd azdaz dazdza', 0),
(9, 'Ajout d\'un nouveau popup!azdazd', 'dazdazd', 'Low', 1, '2019-01-17 13:47:38', 'azdazdaz', 0),
(11, 'TEST1', '', 'Low', 1, '2019-01-17 14:13:15', '', 0);

-- --------------------------------------------------------

--
-- Structure de la table `amil_calendar_events`
--

CREATE TABLE `amil_calendar_events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `start` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `end` varchar(30) COLLATE utf8mb4_bin NOT NULL,
  `idUser` int(11) NOT NULL,
  `forAll` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `amil_calendar_events`
--

INSERT INTO `amil_calendar_events` (`id`, `title`, `start`, `end`, `idUser`, `forAll`) VALUES
(7, 'Labs N°001', 'Jan 10 2019 00:00:00', 'Jan 10 2019 23:59:59', 1, 1),
(8, 'Labs N°002', 'Jan 24 2019 00:00:00', 'Jan 24 2019 23:59:59', 1, 0),
(9, 'Labs N°003', 'Jan 31 2019 00:00:00', 'Jan 31 2019 23:59:59', 1, 1),
(10, 'Gaming Night', 'Jan 21 2019 00:00:00', 'Jan 21 2019 23:59:59', 1, 0),
(11, 'Soirée pizza', 'Jan 15 2019 00:00:00', 'Jan 15 2019 23:59:59', 2, 0),
(12, 'Impro', 'Jan 29 2019 00:00:00', 'Jan 29 2019 23:59:59', 1, 0),
(13, 'Dentiste', 'Jan 18 2019 00:00:00', 'Jan 18 2019 23:59:59', 1, 0),
(14, 'Dentiste', 'Jan 11 2019 00:00:00', 'Jan 11 2019 23:59:59', 1, 0),
(15, 'Dentiste', 'Jan 25 2019 00:00:00', 'Jan 25 2019 23:59:59', 1, 0);

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
(1, 'Compte Rendu de Clément Berthouin', '# Titre\r\n## Sous-Titre LIVRE\r\n### Titre plus profond\r\n\r\nAttributs *italique*, **gras**, \r\n`monospace`, ~~rayé~~.\r\n\r\nListe:\r\n\r\n  * HTML5\r\n  * CSS3\r\n  * Javascript\r\n\r\nListe numérotée:\r\n\r\n  1. React\r\n  2. NodeJS\r\n  3. FireBase\r\n\r\n *[Amiltools](https://github.com/Eito33)* \r\n\r\n Lien automatique : https://github.com/Eito33 \r\n\r\n```\r\n console.log(&quot;hello&quot;); \r\n``` ', 'Gabin Rimbault', '2019-01-08 19:50:11'),
(2, 'Compte Rendu de Clément Berthouin', '# Titre COUCOU\r\n## Sous-Titre \r\n### Titre plus profond\r\n\r\nAttributs *italique*, **gras**, \r\n`monospace`, ~~rayé~~.\r\n\r\nListe:\r\n\r\n  * HTML5\r\n  * CSS3\r\n  * Javascript\r\n\r\nListe numérotée:\r\n\r\n  1. React\r\n  2. NodeJS\r\n  3. FireBase\r\n\r\n *[Amiltools](https://github.com/Eito33)* \r\n\r\n Lien automatique : https://github.com/Eito33 \r\n\r\n```\r\n console.log(&quot;hello&quot;); \r\n``` ', 'Gabin Rimbault', '2019-01-08 19:50:11'),
(3, 'Compte Rendu de Clément Berthouin', '# Titre LIVRE\r\n## Sous-Titre \r\n### Titre plus profond\r\n\r\nAttributs *italique*, **gras**, \r\n`monospace`, ~~rayé~~.\r\n\r\nListe:\r\n\r\n  * HTML5\r\n  * CSS3\r\n  * Javascript\r\n\r\nListe numérotée:\r\n\r\n  1. React\r\n  2. NodeJS\r\n  3. FireBase\r\n\r\n *[Amiltools](https://github.com/Eito33)* \r\n\r\n Lien automatique : https://github.com/Eito33 \r\n\r\n```\r\n console.log(&quot;hello&quot;); COUCOU\r\n``` ', 'Gabin Rimbault', '2019-01-08 19:50:11');

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
(1, 'Gabin', 'Rimbault', 'grimbault@amiltone.fr', '$2a$10$xYmgCDq1Q7AKUKC.o/zZL.3yLWJpciybXreoJ4mzpgBs.tWKBMjiq', '9FW!5$$cg1r0OO7RCrKg1kC3sgIj6xBi8EV5SBYPTohANwgLAH', '# Profil de Gabin Rimbault', 'webdev', 'Admin', 'Niort', 'C$mOwJzA37bvnoMm2ogE7rCRb60jNA'),
(2, 'Clément', 'Berthouin', 'cberthouin@amiltone.fr', '$2a$10$XHa7Y2jKec7ODSdCKlWp2.KkmcpkdNpQ.HRzmwsdMaHav4slQDwp.', '5uTlaZSy0vMAHKCzd8cZD64nw87AFF2yb2FPsVgt2VfLEHaqkN', 'Voici ma biographie !', 'webdev', 'Manager', 'Niort', 'zp$vCiNXdN!vht3YoC9N01g$6AS$qD'),
(3, 'Clément', 'Conseil', 'cconseil@amiltone.fr', '$2a$10$11nqRFvToiQreR1ddaKhcedT/XqzaDnL87LruxJUgLNkwBl6HUUcS', 'NCiKb54zZlV4pcoRf!w44sBR2bKglWFAlHdydaGxb2rYfd7KIf', 'Voici ma biographie !', 'webdev', 'User', 'Niort', 'noapikey'),
(4, 'Clément', 'Bigouret', 'cbigouret@amiltone.fr', '$2a$10$.WWiqRKkGpJxVDuP3pv1j.KBa796RCIoT0vIAwumOQdlsqFHbBZB.', 'Lu98p5UwASXROguDi7d8$s78LCDu0v0nlbB8E6P2U5Tqw11NMW', 'Voici ma biographie !', 'webdev', 'User', 'Niort', 'noapikey');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `amil_api_key`
--
ALTER TABLE `amil_api_key`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `amil_astuce`
--
ALTER TABLE `amil_astuce`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `amil_bugtracker`
--
ALTER TABLE `amil_bugtracker`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_bug_user` (`id_user`);

--
-- Index pour la table `amil_calendar_events`
--
ALTER TABLE `amil_calendar_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Events_User` (`idUser`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `amil_astuce`
--
ALTER TABLE `amil_astuce`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `amil_bugtracker`
--
ALTER TABLE `amil_bugtracker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `amil_calendar_events`
--
ALTER TABLE `amil_calendar_events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `amil_report`
--
ALTER TABLE `amil_report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `amil_bugtracker`
--
ALTER TABLE `amil_bugtracker`
  ADD CONSTRAINT `FK_bug_user` FOREIGN KEY (`id_user`) REFERENCES `amil_user` (`id`);

--
-- Contraintes pour la table `amil_calendar_events`
--
ALTER TABLE `amil_calendar_events`
  ADD CONSTRAINT `FK_Events_User` FOREIGN KEY (`idUser`) REFERENCES `amil_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
