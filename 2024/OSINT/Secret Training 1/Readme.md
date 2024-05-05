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
**Description :** -  
Seul résultat pertinent : Twitter.

#### sherlock
**Lien :**  
**Description :** -  
Aucun résultat intéressant.

#### maigret
**Lien :** https://github.com/soxoj/maigret  
**Description :** -  
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

#### strava
**Lien :** https://www.strava.com/  
**Description :** Strava est une application (ou un site) de partage de performances d’entrainement notamment.  
Aucun utilisateur ne semble avoir le pseudo `ColdSteelShoot`.  
