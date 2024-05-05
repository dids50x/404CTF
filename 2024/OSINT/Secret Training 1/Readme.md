# SECRET TRAINING 1

```
S'il y a un sport qui demande un entraînement rigoureux,
c'est bien le biathlon, car celui-ci est du deux en un.
Vous choisissez de vous renseigner sur vos adversaires,
en étudiant non seulement leurs performances mais également leurs routines d'entrainement.
Cependant durant vos recherches, vous entendez parler d'une biathlète prometteuse qui,
à ce qu'il parait, arrivera bientôt sur le devant de la scène, mais pour le moment,
elle garde son identité secrète...
 
Vous ne connaissez que son pseudo : ColdSteelShoot

Retrouvez son identité (Nom et Prénom)
```

## Pistes, idées
- vraie identité
   - matcher les évènements Twitter avec une personne qui existe
- fausse identité
   - chercher tous les trucs de messages cachés & co, aucune limite dans les possibilités

Essayer de chercher « Secret Training », « biathlon », « deux en un », « devant de la scène », « routines d'entrainement ».  
ColdSteelShoot peut être un pseudo dérivé de son vrai nom, « Cold » pourrait donner « Claude » par exemple.

## Recherches
### Recherche du pseudo
#### Blackbird

**Lien :** https://blackbird-osint.herokuapp.com/  
**Description :** -  
Plusieurs résultats mais seul *Twitter* semble être bon, le reste n’est que du « faux positif ».

#### Whatsmyname
**Lien :** https://whatsmyname.app/  
**Description :** -  
Aucun résultat intéressant.  
J’ai fait plusieurs fois la recherche sur cet outil, la capture d’écran n’est peut-être pas la plus représentative.  

#### socialscan
**Lien :** https://github.com/iojw/socialscan  
**Description :** socialscan offers accurate and fast checks for email address and username usage on online platforms.  
Seul résultat pertinent : Twitter.

#### sherlock
**Lien :** https://github.com/sherlock-project/sherlock  
**Description :** Hunt down social media accounts by username across social networks  
Aucun résultat intéressant.

#### maigret
**Lien :** https://github.com/soxoj/maigret  
**Description :** Maigret collects a dossier on a person by username only, checking for accounts on a huge number of sites and gathering all the available information from web pages. No API keys required. Maigret is an easy-to-use and powerful fork of Sherlock.  
Possibilité de lancer dans GoogleCloudShell.  
Résultat :
```
./maigret.py --html ColdSteelShoot
[-] Starting a search on top 500 sites from the Maigret database...
[!] You can run search by full list of sites with flag `-a`
[*] Checking username ColdSteelShoot on:
[+] linktr.ee: https://linktr.ee/ColdSteelShoot
[+] social.msdn.microsoft.com: https://social.msdn.microsoft.com/profile/ColdSteelShoot
[+] Shutterstock: https://www.shutterstock.com/fi/g/ColdSteelShoot/about
[+] MicrosoftTechNet: https://social.technet.microsoft.com/profile/ColdSteelShoot/
[+] AllRecipes: https://www.allrecipes.com/cook/ColdSteelShoot
[+] forums.ea.com: https://forums.ea.com/en/nhl/profile/discussions/ColdSteelShoot
[+] Windy: https://community.windy.com/user/ColdSteelShoot
[+] ImgInn [Instagram]: https://imginn.com/tagged/ColdSteelShoot/
[+] metacritic: https://www.metacritic.com/user/ColdSteelShoot
[?] VC.ru: https://vc.ru/search/v2/subsite/relevant?query=ColdSteelShoot
[+] AskFM: https://ask.fm/ColdSteelShoot
 ├─username: COldSteelshoot
 ├─fullname: COldSteelshoot
 ├─posts_count: 0
 ├─likes_count: 0
 └─image: https://casts.ask.fm/assets/noAvatar-2325eb51f8abe4e4678a25b16cb32a5399e84d9e82b5bc7efcc0b623c2aa12ec.png
[+] Computerbase: https://www.computerbase.de/forum/members/?username=ColdSteelShoot
[+] Scorcher: https://www.glavbukh.ru/forum/member.php/?username=ColdSteelShoot
 ├─fullname: Журнал "Главбух"
 ├─image: https://cdn4.cdn-telegram.org/file/kQKkRDTu3qo7r_bz20Zi2NMu9f6zM0fnf1TAB3QoJDrnOe7u3loOfQgAzh4x1-p-0tuwYj5H7ERMITK0xkBXxjVN4zn2QfeFPiS40Bbpr8wTHnW1Ova9B-JlMa8okkGZ-RxpYl9tZr-trPxm96eiqIbi6iq_7uO0dlxVNfXOE-pLQ5nQulyzLjRQfjAgHf37l1sQV10niG4O5fRXWT7yneIGmzxTz_VSh-EwqvVZ5d-F95jOwbTDAnoAUeeppIqe3V2-R0YVQxDXS6gXf_VoNpcZ-KRZVdHjPr3tOd9QdIGqwFiiveCWFp1PdtgfTdB86SSGn4u1quAujMHCqey37w.jpg
 └─bio: Бухгалтерия и налоги
Официальный канал журнала для бухгалтера e.glavbukh.ru    
⚡️Здесь каждый день публикуются новости бухгалтерского и налогового мира. 
💥Избавьте себя от посторонней информации и фэйка!
‼️Администратор 
@brn1234
⚡️Реклама 
@polarightt
[+] HackerNews: https://news.ycombinator.com/user?id=ColdSteelShoot
[+] banki.ru: https://banki.ru/blog/ColdSteelShoot/
[+] Lolchess: https://lolchess.gg/profile/na/ColdSteelShoot
[+] Contently: https://ColdSteelShoot.contently.com/
[+] InfosecInstitute: https://community.infosecinstitute.com/profile/ColdSteelShoot
[+] club.cnews.ru: https://club.cnews.ru/ColdSteelShoot
100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 500/500 [00:35<00:00, 14.02it/s]
[-] Restarting checks for 14 sites... (1 attempts left)
100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 14/14 [00:30<00:00,  2.18s/it]
[!] Too many errors of type "Access denied" (8.0%)
[-] You can see detailed site check errors with a flag `--print-errors`
[-] Generating report info...
[-] HTML report on all usernames saved in /home/user/maigret/reports/report_ColdSteelShoot_plain.html
[*] Short text report:
Search by username ColdSteelShoot returned 18 accounts.
Found target's other IDs: COldSteelshoot.
Extended info extracted from 2 accounts.
Countries: us, ru, in, kr, jp, pl, eg, de
Interests (tags): photo, links, music, stock, forum, gaming, news, freelance, blog
```
Voir `report_ColdSteelShoot_plain.html` pour le détail.
J'ai essayé avec l'option `-a` pour tous les sites (au lieu du TOP500) et `-n 10` pour limiter les connexions concurrentes.

#### Phind.com
Moteur ou méta moteur de recherche doppé à l'IA.
Il m'a donné une indication potentielle de jeu vidéo.

#### Outils dédiés à Twitter
https://tweetbeaver.com/ : `Tweetbeaver has closed due to Twitter API changes`  
https://tinfoleak.com/ : `There were a problem while trying to generate the report: You need to assign value to OAuth tokens. Please, read the README.txt file for more information.`

#### Epieos
Ici il faut obligatoirement une adresse email. Nous ne la connaissons pas. Il faut "bruteforcer" en quelque sorte.  
Il y a un résultat avec `coldsteelshoot@gmail.com`, mais ça semble trop récent par rapport au CTF.
L'image de profil de l'utilisateur est la même que sur Twitter : 
https://lh3.googleusercontent.com/a-/ALV-UjWZmWaaiiZL21DBciqLVO4unckdTxn9Ejngu7jGP6dLse9nnBU  
Chose étrange, pour cette adresse il semble y avoir un compte Strava mais si on cherche "ColdSteelShoot" sur Strava on ne trouve personne.

Rien avec les adresses suivantes :
- coldsteelshoot@laposte.net
- coldsteelshoot@hotmail.fr (en cours de test)
- coldsteelshoot@yahoo.fr (en cours de test)
- coldsteelshoot@orange.fr (en cours de test)
- coldsteelshoot@ik.me (en cours de test)
- coldsteelshoot@proton.me (en cours de test)
- coldsteelshoot@gmx.fr (en cours de test)
- coldsteelshoot@email.fr (en cours de test)
- coldsteelshoot@mail.fr (en cours de test)
- coldsteelshoot@outlook.fr (en cours de test)

#### Autres outils et extensions Google Chrome testés

J'ai testé les outils et extensions Google Chrome suivantes, sans succès. Peut-être ne les ai-je pas bien utilisés ? :
- SocialDog (pas certain mais je l'avais noté)
- swordfish.ia
- snov.io
- x-ray
- https://www.startpage.com/ 
- https://www.dogpile.com/
- https://www.metacrawler.com/
- Bing
- DuckDuckGo
- Internet Archive / Wayback Machine : http://web.archive.org/web/20240000000000*/https://twitter.com/ColdSteelShoot

#### Divers réseaux sociaux alternatifs
##### Strava
**Lien :** https://www.strava.com/  
**Description :** Strava est une application (ou un site) de partage de performances d’entrainement notamment.  
Aucun utilisateur ne semble avoir le pseudo `ColdSteelShoot`.  
Même chose sur "BeSport".

##### Mastodon
**Lien :** -  
**Description :** Alternative à Facebook, plus ou moins.  
Aucun utilisateur ne semble avoir le pseudo `ColdSteelShoot`. 

##### Bluesky
**Lien :** -  
**Description :** Alternative à Twitter, plus ou moins.  
Aucun utilisateur ne semble avoir le pseudo `ColdSteelShoot`. 

##### Countersocial
**Lien :** https://counter.social/  
**Description :** -  
Aucun utilisateur ne semble avoir le pseudo `ColdSteelShoot`. 

## Outils d'enquête OSINT à envisager

### Spiderfoot
**Lien :** https://github.com/smicallef/spiderfoot  
**Description :** SpiderFoot is an open source intelligence (OSINT) automation tool. It integrates with just about every data source available and utilises a range of methods for data analysis, making that data easy to navigate.  

### OsintFramework
**Lien :** https://osintframework.com/  
**Description :** -  
Donne quelques idées, à voir.

### Osintracker
**Lien :** https://www.osintracker.com/  
**Description :** -  
Donne quelques idées, à voir.

### Maltego
**Lien :** https://github.com/smicallef/spiderfoot  
**Description :** -  
Besoin de temps pour prendre en main le logiciel, édition communautaire peut-être trop légère ?

### Lampyre
**Lien :** https://lampyre.io/  
**Description :** -  
L'outil semble poussé mais quid du tarif ?

https://sociallinks.io/  
https://i-intelligence.eu/  
http://geocachingtoolbox.com/  


## Investigations

### Compte Twitter
**Lien :** https://twitter.com/ColdSteelShoot  

#### Analyse (mon analyse manuelle)
Il n'y a pas de date précise sur la création du compte ni l'adresse email utilisée.  
Dans les publications il n'y a pas de photo de lieu ni de personne que l'on pourrait tenter d'identifier.  
On trouve 4 images :
- photo de profil, qui a sans doute été générée par une intelligence artificielle
- photo de fond (header) qui provient d'un fournisseur d'images
- meme pas bête
- meme chat qui pleure
Dans aucune des images on ne trouve de texte.

Analyse de stéganographie de base sur les images ne retourne rien (strings, données exif, binwalk, LSB, comparaison avec l'image d'origine (TinEye, Google image, Bing)...).  
Les messages dans les tweets ne semblent pas pouvoir cacher de secret via la technique des homoglyphes / unicode.  
Le pseudo m'a invité à afficher la page sans le style (CSS) mais rien ne m'a sauté aux yeux.  
L'utilisateur a 4 abonnements, qui semblent être 4 vrais profils :
- [Elon Musk](https://twitter.com/elonmusk)
- [Martin Fourcade](https://twitter.com/martinfkde) (biathlète français)
- [Quentin Fillon Maillet](https://twitter.com/quentinfillon) (biathlète français)
- [L'équipe](https://twitter.com/lequipe) (journal sportif)
L'utilisateur n'est membre d'aucune liste.
Il ne semble y avoir rien de pertient dans les abonnés de l'utilisateur, ni dans les réponses à ses tweets (j'ai essayé d'afficher les réponses potentiellement masquées sur chacun des tweets mais ça n'a rien révélé). Rien non plus avec "Voir les engagements avec le post". L'utilisateur ne suit aucun sujet. L'utilisateur n'a pas créé de liste.

Quelques réflexions :
- l'utilisateur semble être plutôt du sud de la France (Pyrénées ? utilisation des termes "poche", "chocolatine")
- l'utilisateur indique être sportif de haut niveau, ces personnes sont référencées officiellement, cf https://www.sports.gouv.fr/liste-des-sportifs-francais-de-haut-niveau-60
- cependant l'utilisateur indique être anonyme/incognito
- l'utilisateur indique retourner à l'entrainement mais l'IBU Cup 2023-24 s'est terminée début mars (l'IBU semble être une des principales compétitions de biathlon)
- l'utilisateur a un pseudo plutôt étrange, "Cold Steel" est une marque de couteau, cela signifie aussi "arme blanche" en anglais, je ne comprends pas pourquoi l'utilisateur qui fait du biathlon aurait pris ce pseudo, à moins qu'il ne faille juste tenir compte de "Froid", "Acier" et "Tir"...
- l'utilisateur s'entraine avec des skis à roulette (ou des rollers)
- il existe du biathlon d'été

IBU : "L'IBU Cup, anciennement appelée Coupe d'Europe de Biathlon jusqu'en 2008, est une compétition de biathlon organisée chaque année par l'Union internationale de biathlon. C'est une compétition de niveau immédiatement inférieur à la Coupe du monde."

Le biathlon d'été combine la course à pied (cross-country) ou le ski-roues (rollerski) et le tir sportif. ça pourrait être une piste, mais l'utilisateur indique préférer la neige.

À partir de mes échecs je conclus plusieurs choses :
- il faut peut-être identifier 3 mots phares pour les tester sur https://what3words.com (j'ai déjà essayé plusieurs combinaisons par rapport au pseudo, au sport, aux boulangeries...)
- il faut peut-être analyser finement chaque tweet (faire de l'analytics)
- il y a peut-être un message codé avec une technique que j'ignore (il existe tellement de possibilités)
- il faut faire une recherche par rapport à la météo
- il faut faire une recherche par rapport aux boulangeries
- il faut tenir compte de la date et de l'heure des tweets
- il faut utiliser un client Twitter spécifique


#### Tweets par ordre de publication
1)
> Quel joli temps pour aller marcher un peu

2)
> L'avantage du vent, c'est que ça te fait aller plus vite quand tu es dans son sens. Le désavantage, c'est que tu vas plus lentement quand tu es à contresens

3)
> La sortie de la matinée gâchée par une averse, je croise les doigts pour cet après midi 

4)
> Plus les jours avancent, plus la neige me manque, c'est toujours une adaptation de passer de la neige aux rollers pour l'entrainement...

5)
> Partir à l'entrainement avec une poche pour faire les courses en rentrant

6)
> Quand entrainement rime avec vent, c'est du sport, vraiment !

7)
> Mon étendoir s'est fait emporter par une bourrasque...

8)
> Je vais bientôt rentrer chez mes parents pour 2-3 jours, trop hâte de revenir dans le coin où j'ai grandi !!

9)
> Il a fait tellement chaud ce matin, j'ai bu une carafe entière en rentrant

10)
> Arrivée chez mes parents, ca fait du bien de revoir sa petite ville !! Demain, balade !

11)
> Enfin des vraies petites vacances, mais le retour s'annonce explosif, j'ai tellement de motivation !

12)
> Je suis passé prendre des chocolatines pour mes parents ce matin, je suis tombé sur une boulangerie incroyable ! Fait amusant, à moins de 3 km aux alentours une autre boulangerie porte le même nom 

13)
> Je suis de retour de chez mes parents, j'ai fait le plein de motivation, je vais m'entrainer toujours plus dur !!

14)
> La blague du jour : Vous savez pourquoi les stylos ne savent pas nager ? Parce ce que les crayons à papier (pas pied)... bon je sors m'entrainer

15)
> Je passe trop de temps sur les réseaux en ce moment...  Je pense que je vais déconnecter pour me reconnecter à ma passion du sport. Je veux assurer la prochaine saison ! Triple bises


### Autres pistes

Tester adresses email sur Epieos :
- coldsteelshoot@laposte.net
- 
- 



Tenter des recherches sur dark web.  

Tracelabs  

Tiktok ? => il y a des suggestions mais qui ne semblent montrer que des vidéos vues des centaines de milliers de fois. Probabilité de matcher avec le CTF assez faibles.

J'ai un peu baclé le travail sur les images du profil Twitter, il faut peut-être reprendre ce travail méticuleusement.
stegopit PNG pixel indicator (`stegopit -v -i G fichier.png`)  
stegopvd pixel value differencing (`stegopvd extract fichier.png -z`)



### Pistes qui sont plutôt à écarter

Faut-il aller jusqu'à mettre en place un faux site de secret training/ biathlon pour inviter le titulaire du compte Twitter à révéler ses informations personnelles ?

J'ai déjà cherché sur les noms de domaine.  

Victoria Secret Training ?  

Secret Training = boutique de sport plutôt pour le cyclisme mais rien trouvé dans les commentaires ou autres.  

Secret Training = salle de sport à Paris, Séphane Robinet.  

Jeu vidéo "The Legend of Heroes: Trails of Cold Steel" (4 opus)

Boulangerie.contact

J’ai cherché « boulangerie », « boulangerie incroyable », « boulangeries qui portent le même nom »…  
Est-ce que la boulangerie est une bonne piste ? Est-ce qu’il y a eu participation à une émission TV du style le meilleur boulanger ?

https://www.location-gites65.com/legal.php

https://www.nordicmag.info/biathlon-soldier-hollow-revivez-en-video-la-victoire-decrochee-par-justine-braisaz-bouchet-lors-du-sprint-egalement-termine-troisieme-par-lou-jeanmonnot-0309/

https://www.armureriesaintmartin.com/boutique-sxm/couteaux-cadeaux-archerie-et-arbaletes/arbaletes/cold-steel-arbalete-shot-130

https://arsenal-toulouse.fr/120-springfield-armory

https://boutiquedesartsmartiaux.com/products/cold-steel-couteau-entrainement-skean-dhu

https://france-metal.fr/ice-cold-shot-nouvelle-video-disponible/

"Cold Steel Queens" qui est une équipe qui a concouru au "U.S. Biathlon National Championships" en 2023.

"branlette pour pâtisserie" ?? https://www.laboutiquedeschefs.com/patisserie-boulangerie/ustensiles-de-patisserie/saupoudreuses-branlettes/  
(merci Google pour ce résultat intéressant à partir des mots "poudreuse" et "boulangerie")

https://www.facebook.com/www.IONEYE.org/videos/ioneye-splatterbrains-film-collaboration-w-johnnyl401-gofundmeioneye-cardib-guts/2179289772162129/?locale=zh_CN


### Sites à suivre ou à mettre de côté pour plus tard

[bormaxi8080 OSINT Timeline](https://github.com/bormaxi8080/osint-timeline/) : Welcome to bormaxi8080 OSINT Timeline weekly newsletter with collection of tools, services and investigations!

https://osintfr.com/fr/nos-osinteurs-ont-du-talent/

https://github.com/HackademINT/404CTF-2023/tree/main/RenseignementEnSourcesOuvertes/QueteDeSens

https://github.com/fallais/tweg

https://korben.info/cachez-un-message-secret-dans-vos-tweets.html

https://github.com/joshefin/secretwit

https://hassen-hannachi.medium.com/osint-ultimate-resources-23f489c8132c

https://osintteam.blog/

https://start.me/p/JDraa0/osint-eirs


