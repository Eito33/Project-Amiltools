
Fonction :

Home:
La page HOME est le carrefour central de l'application.
On y retrouve un condensé des informations en place
    CardBoard:
        - Regroupe sous forme de 3 Cartes :
            - Report : Compte rendu déja établie
            - Bug : Les bugs qui nous sont assigné
            - Task : Les taches qui nous sont assigné.

    ReportBoard: 
        - Affiche une partie du dernier compte rendu établie.
            un lien est disponible pour afficher intégralement dans la page le compte rendu
    BugTrackerBoard ou TaskBoard au choix (a définir)
    Affiche les bugs ou task qui est assigné a l'utilisateur.

MenuLeft: 
    Affiche l'ensemble des liens utiles a l'application :
        - DashBoard : Ramene sur la page principal de l'application
        - Calendar : Affiche l'onglet Calendar de l'application
        - Report : Affiche l'onglet Report de l'application
        - Task : Affiche l'onglet task de l'application
        - BugTracker : Affiche l'onglet bugtracker de l'application

AmilTools : Titre de l'application, un clic sur le nom raméne sur la page principal de l'application

SearchBar : Non fonctionnel pour le moment

Calendrier :
Afficher un calendrier MOIS/MOIS dans des grande case.
L'utilisateur a la possibilité de marquer des rendez vous.
    Voir ajout via google calendar et envoie de mail
L'utilisateur peut voir ses rendez vous
L'utilisateur peut modifier un rendez vous
L'utilisateur peut supprimer un rendez vous

Report : 
Affiche dans la grande fenetre le dernier compte rendu
Affiche dans le menu de gauche l'ensemble des 5 dernier compte rendu sous forme de lien
    Un clic sur un lien modifie la grande fenetre pour afficher le bon compte rendu
Le dernier lien du menu de gauche modifie la grande fenetre pour faire apparaitre l'ensemble des compte rendu sauvegarder
Il est possible d'ajouter, modifier, supprimer, archiver un les comptes rendu

Task :
Task est un planificateur de tache, il permet l'ajout de dead line dans les taches a accomplir
il est possible d'ajouter, editer, supprimer, valider et de voir le détail (d') une task
Une tache est forcément assigner a un utilisateur valide. 
    Si durant la saisie de la tache et l'assignement de celle ci a un utilisateur et que celui ci n'est pas trouver.
    la tache ne peut etre enregistrer
Une tache comprend :
                        - Un Nom
                        - Une personne attribué
                        - Une date d'échéance
                        - Un booléan si elle est réaliser ou non
                        - Un contenu qui explique la tache
Le dernier jour de la task celle ci devient oranger, elle passera a rouge quelques heures avant la fin de la tache.
Une fois le délais écouler ou alors si elle est valider la task est automatiquent archiver. 
Il est possible de désarchiver une task

bugTracker :
Le BugTracker est un traqueur de bugn il permet de signaler les bug découvert et d'afficher plus de détails sur la source du probléme.
Il est possible d'ajouter, editer, supprimer, valider et de voir le détail (d') un bug
Un Bug Comprend :
                    - Un Nom
                    - Une priority (Priorité du bug a régler : Low - Medium - High)
                    - Un Contexte (De quelle domaine releve le bug : Logiciel - Web - Infrastructure)
                    - Une Zone  (Indiquer la zone dans lequele le bug est présent (quelle fichier web ? Quelle logiciel ? ))
                    - Une date de création ainsi que le nom du créateur
                    - Une personne attribué
                    - Un contenu qui explique, montre comment réaliser le bug
Un bug n'est pas forcément attribuer a une personne dans ce cas elle sera indiquer comme "SIGNALER" dans le cas ou un bug
serait assigné a une personne il sera indiquer comme "EN TRAITEMENT"
Une fois le bug valider celui-ci est automatiquement archiver.
Il est possible de désarchiver un bug.


User: 
La partie user concerne les options et informations lié a l'utilisateur.
Celui-ci pourra retrouver sur sont profile en cliquant en haut a droite sur l'icone user :
    - Nom + Prénom
    - Mail
    - Role (Admin, User)
    - Métier (Developpeur Web)
    - Une biographie qu'il aura écrit
    - Un avatar
    - Il retrouvera l'ensemble des taches qui lui sont assigner
    - il retrouvera l'ensemble des bug qui lui sont assigner
Il lui sera possible de modifier l'ensemble des informations déja enregistrer (Nom, prénom, mail, mdp, métier, biographie) or avatar qui lui sera attribuer automatiquement a la connexion.
L'utilisateur pourra depuis sont panel user, valider, editer, supprimer, archiver des task, bug, via des icones prévue a cette effet.
L'utilisateur aurra également la possibilité de ce deconnecter se qui aura pour effet de le renvoyer sur la page de connexion.

Doc:
La documentation est une page GitBook qui retranscrit l'ensemble de ce manuel et quelques informations supplémentaire comme le changelog et le code source.

Options :
Cette partie de l'application reprendra l'ensemble des options qui auront des effet sur l'application 
Actuellement non prévue