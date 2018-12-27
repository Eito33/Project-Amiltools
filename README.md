# AmilTool's - `V. 1.0.0:002 Dev`
![ImageLOAD](http://image.noelshack.com/fichiers/2018/50/4/1544740136-amiltools.png)

## SOMMAIRE :

* [Général](https://github.com/Eito33/Project-Phantom#1-général)
* [Fonctions](https://github.com/Eito33/Project-Phantom#2-fonctions)
* [Logiciels](https://github.com/Eito33/Project-Phantom#3-logiciels)
* [Changelog](https://github.com/Eito33/Project-Phantom#3-changelog)


------------------------------


## 1. Général

AmilTools est une application développer avec react.
Elle a pour vocation à être installé sur un réseau propre (local/web).
Elle permet aux équipes de gérer plus efficacement leur temps de travail et apporte des outils viables plutôt que devoir télécharger d'autres outils.

C'est une sorte de boîte à outils du développeur qui permet de centraliser un maximum d'outils et de logiciel.

Cette application a été développer pour les développeurs d'Amiltone.

Sera défini comme tel.
1. NavBar : Barre de navigation qui contient le champ de recherche / zone de notification / logo.
2. MenuLeft : Barre de navigation contenant les différents onglets de navigation de l'application.
3. Fenêtre principale (Grande fenêtre) : L'espace central à droite du MenuLeft affiche l'ensemble des vues appelées et demandées par l'application.

L'ensemble de l'application est réaliser avec les technologies suivante :
1. HTML5 / CSS3
2. JS ES6
3. React
4. NodeJS

L'application dispose d'un ensemble client/serveur

Le serveur créer avec NodeJS, gère l'ensemble des routes et tout le back end de l'application.
Grace a une API REST il renvoie sous format JSON les données qui lui sont demandée.

Le client gère quand a lui l'ensemble des actions utilisateurs et les vues de l'applications.
Il fait des demandes auprès du serveur.

------------------------------


## 2. Fonctions

### Home:
La page HOME est le carrefour central de l'application.
On y retrouve un condensé des informations en place

1. CardBoard:
	 - Regroupe sous forme de 3 Cartes :
	 - Report : Compte rendu déja établie
	 - Bug : Les bugs qui nous sont assignés
	 - Task : Les tâches qui nous sont assignées.
 2. ReportBoard:
	 - Affiche une partie du dernier compte rendu établie.
	 - Un lien est disponible pour afficher intégralement dans la page le compte rendu
 3. BugTracker ou TaskBoard
	 - Affiche les bugs ou tâche qui est assigné à l'utilisateur.
4. MenuLeft:
	- Affiche l'ensemble des liens utiles a l'application :
	- DashBoard : Ramène sur la page principale de l'application
	- Calendar : Affiche l'onglet Calendar de l'application
	- Report : Affiche l'onglet Report de l'application
	- Task : Affiche l'onglet tâche de l'application
	- BugTracker : Affiche l'onglet bugtracker de l'application
5. AmilTools : Titre de l'application, un clic sur le nom ramène sur la page principale de l'application
6. SearchBar : Non fonctionnel pour le moment

------------------------------


## 3. Logiciels

### Calendar :
1. Afficher un calendrier MOIS/MOIS dans des grandes cases.
2. L'utilisateur a la possibilité de marquer des rendez-vous.
    - Voir ajout via google calendar et envoie de mail
3. L'utilisateur peut voir ses rendez-vous
4. L'utilisateur peut modifier un rendez-vous
5. L'utilisateur peut supprimer un rendez-vous
6. Réaliser le calendrier en HTML/CSS/JS avec react
    - Utilisation du components appropriés.
    - Possibilité de faire d'enregistrer des rendez-vous avec api web storage
    - On les affiche aussi avec l'api web storage
7. Possibilité d'afficher un bouton a un utilisateur qui génère du code qui enregistre un rendez-vous pour la personne :

A -> Envoie un rendez-vous le jeudi 12/12/2018 a 18h00 par message -> B
B <- Recoie un Bouton html et au clic enregistrera dans son calendrier le RDV <- A

Le button contiendra le code générer automatiquement pour enregistrer un RDV le 12/12/2018 à 18h avec l'api web storage

### Report :
1. Affiche dans la grande fenêtre le dernier compte rendu
2. Un selecteur est disponible en haut de la fenetre pour afficher les comptes rendu.
    - Un clic sur le selecteur fait apparaitre les comptes rendu enregistrer
        -> Il suffit de cliquer sur un selecteur pour voir apparaitre le bon compte rendu.
3. Il est possible d'ajouter, modifier, supprimer, archiver les comptes rendu

Le but du report (Compte rendu) et d'apporter les informations retransmises lors des réunions ou des rassemblements.
Il y a deux parties distinctes au report :
    - L'écriture :
        - Se fera via une fenêtre ouverte et en markdown (utiliser la librairie marked)
        - L'affichage des comptes rendu écrit.
Au besoin on pourra définir qui a accés en lecture-écriture au markdown via les roles.
L'utilisateur se connecte et à la possibilité d'écrire un nouveau compte rendu avec le markdown.
Une fois celui-ci terminé, l'utilisateur a la possibilité de modifier, de supprimer ou d'enregistrer son document.

Le titre n'est pas changeable il aura toujours la forme suivante :
    - Compte Rendu N°[ID] du "13/12/2018"

- Si l'utilisateur enregistre son document, il est automatiquement enregistrer dans la BDD.
    Il s'affichera en tete de liste dans le selecteur du haut et prendra automatiquement la place du dernier report dans la fenêtre centrale de l'application.

- Si l'utilisateur souhaite modifier un report, celui-ci y a accés via un bouton quand on affiche un report.
    - Cela a pour effet de charger dans une nouvelle fenêtre le markdown déja écrit. L'utilisateur a ensuite la possibilité de sauvegarder c'est modification ou de supprimer le report.
- Si l'utilisateur souhaite supprimer un report il peut le faire via un bouton prévu a cet effet.
    Une demande de confirmation via une fenêtre pop-up sera demandée.

### Task :
Task est un planificateur de tâche, il permet l'ajout de dead line dans les tâches a accomplir
il est possible d'ajouter, éditer, supprimer, valider et de voir le détail d'une tâche
Une tâche est forcément assignée à un utilisateur valide.
    -Si durant la saisie de la tâche et l'assignation de celle ci a un utilisateur et que celui-ci n'est pas trouvé.
    la tâche ne peut etre enregistrer
Une tâche comprend :
1. Un nom
2. Une personne attribuée
3. Une date d'échéance
4. Un booléen si elle est réalisé ou non
5. Un contenu qui explique la tâche

Le dernier jour de la tâche celle-ci devient oranger, elle passera à rouge quelques heures avant la fin de la tâche.
Une fois le délai écoulé ou alors si elle est validé la tâche est automatiquent archiver.
Il est possible de désarchiver une tâche

Les tâches sont un élément essentiel de l'application, chaque utilisateur pourra définir c'est propre tâche.
Il pourra ainsi visualiser très facilement quelle tâche il doit mener à bien en premier.

Le but est d'afficher un tableau styliser avec html/css et d'apporter le maximum d'informations rapidement sur les tâche en cours.

L'utilisateur peut créer une tâche celle-ci sera automatiquement enregistrer dans la BDD une fois valider.
L'utilisateur a la possibilité via un bouton prévu a cet effet de modifier une tâche.
L'utilisateur a la possibilité via un bouton prévu a cet effet de supprimer une tâche
L'utilisateur a la possibilité via un bouton prévu a cet effet d'archiver une tâche

Chacune des options developpées plus haut a pour effet de :
1. Enregistrer dans la bdd une nouvelle tâche
2. De charger une nouvelle tâche et l'utilisateur peut ensuite enregistrer ou supprimer sa tâche
3. De supprimer une tâche via un id, une demande de confirmation sera demandée.
4. D'archiver une tâche celle-ci apparaîtra alors en lecture-seule et ne pourra plus être modifier.

### BugTracker :
Le BugTracker est un traqueur de bug il permet de signaler les bugs découverts et d'afficher plus de détails sur la source du problème.
Il est possible d'ajouter, éditer, supprimer, valider et de voir le détail (d') un bug
Un Bug Comprend :
1. Un nom
2. Une priorité (Priorité du bug a réglé : Low - Medium - High)
3. Un contexte (De quel domaine relève le bug : Logiciel - Web - Infrastructure)
4. Une zone  (Indiquer la zone dans lequel le bug est présent (quel fichier web ? Quelle logiciel ? ))
5. Une date de création ainsi que le nom du créateur
6. Une personne attribuée
7. Un contenu qui explique, montre comment réaliser le bug

Un bug n'est pas forcément attribué à une personne dans ce cas elle sera indiquée comme "SIGNALER" dans le cas ou un bug
serait assigné à une personne il sera indiqué comme "EN TRAITEMENT"

Une fois le bug valider celui-ci est automatiquement archivé.
Il est possible de désarchiver un bug.

Le bugtracker est un élément essentiel de l'application, chaque utilisateur pourra voir les différents bugs signaler par projet.
Il pourra ainsi visualiser très facilement quel bug est présent et disponible pour être corrigé.
Le but est d'afficher un tableau styliser avec html/css et d'apporter le maximum d'informations rapidement sur les bug en cours.
Le tout sera bien sur synchronisé avec la BDD.

L'utilisateur peut créer/signaler un bug celle-ci sera automatiquement enregistrer dans la BDD une fois valider.
L'utilisateur a la possibilité via un bouton prévu a cet effet de modifier un bug.
L'utilisateur a la possibilité via un bouton prévu a cet effet de supprimer un bug
L'utilisateur a la possibilité via un bouton prévu a cet effet d'archiver/désarchiver un bug

Chacune des options developpées plus haut a pour effet de :
1. Enregistrer dans la bdd d'un nouveau bug
2. De charger un bug et l'utilisateur peut ensuite enregistrer ou supprimer son bug
3. De supprimer un bug via un id, une demande de confirmation sera demandée.
4. D'archiver un bug si celui-ci est traité et valider celui-ci apparaitra alors en lecture-seule et ne pourra plus être modifier mais pourra etre desarchivé.

### User:
La partie user concerne les options et informations liées a l'utilisateur.
Celui-ci pourra retrouver sur sont profile en cliquant en haut à droite sur l'icone user :
1. Nom + Prénom
2. Mail
3. Rôle (Admin, User)
4. Une biographie qu'il aura écrite
5. Un avatar
6. Il retrouvera l'ensemble des tâches qui lui sont assignées
7. il retrouvera l'ensemble des bugs qui lui sont assignés

Il lui sera possible de modifier l'ensemble des informations déja enregistrer (Nom, prénom, mail, mdp, métier, biographie) hors avatar qui lui sera attribué automatiquement à la connexion.
L'utilisateur pourra depuis son panel user, valider, éditer, supprimer, archiver des tâches, bug, via des icônes prévues a cet effet.
A la connexion l'utilisateur peut etres amener a cocher une case lui demandant si il souhaite rester connecter. Cela a pour effet d'inscrire un token dans le local storage et l'utilisateur ne sera déconnecter que si il clic sur deconnexion.
L'utilisateur aura également la possibilité de se déconnecter ce qui aura pour effet de le renvoyer sur la page de connexion.

L'utilisateur devra se connecter via différentes options :
1. Compte amiltone (@amiltone.fr) <- Pour le moment uniquement

Une fois connecté celui-ci aura accès à l'application. Le cas échéant on lui demandera de se connecter.
L'utilisateur à accès a l'ensemble des fonctionnalités.

### Doc:

Accessible [ici](https://devgabinrimbault.gitbook.io/amiltool-s/)

------------------------------


## 3. Changelog

Le changelog est disponible [ici](https://github.com/Eito33/Project-Amiltools/tree/dev/changelog) 
