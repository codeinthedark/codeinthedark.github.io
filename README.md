# What is [Code in the Dark](http://codeinthedark.com)
[Code in the Dark](http://codeinthedark.com) est un concours front-end (HTML, CSS), originaire de [Tictail](https://tictail.com), où chaque candidat concourt pour mettre en œuvre la conception d'un site Web à partir d'une seule capture d'écran. Le problème est qu’aucun aperçu des résultats n’est autorisé lors de la mise en œuvre et qu’aucun outil de mesure ne peut être utilisé. Le gagnant est décidé par le public.

Pendant le concours, les participants doivent utiliser notre éditeur personnalisé pour Code in the Dark, que [vous pouvez essayer ici] (http://codeinthedark.com/editor).

# Les règles
* Chaque candidat reçoit un ensemble de l'éditeur, qui comprend une capture d'écran de la page qu'il doit implémenter avec HTML/CSS et tous les éléments supplémentaires dont il pourrait avoir besoin.
* Aucun iframe, framework, extrait de code ou autre actif en dehors de ceux répertoriés dans les instructions n'est autorisé. Le site doit être construit à partir de zéro pendant le concours.
* Le candidat doit avoir l'éditeur en mode plein écran et n'est jamais autorisé à en sortir ni à utiliser des outils de mesure.
* Les aperçus des résultats sont strictement interdits jusqu'à la fin du temps imparti.
* Une fois le délai de 15 minutes écoulé, chaque concurrent présente son résultat au public, qui vote ensuite pour son favori pour désigner le gagnant.

# Organiser votre propre Code In The Dark 

Code in the dark est open source - vous pouvez utiliser l'éditeur et les règles pour organiser votre propre événement communautaire à condition de suivre quelques directives de base. Pour héberger votre propre événement, créez une pull request (en suivant [ces instructions](https://github.com/codeinthedark/codeinthedark.github.io#creating-the-pull-request)) dans ce référentiel pour qu'il soit annoncé le le site Web [codeinthedark.com](http://codeinthedark.com). Votre page doit faire référence au site Web officiel de Code in the Dark [codeinthedark.com](http://codeinthedark.com). Veuillez lire attentivement et vous assurer de bien comprendre [la licence](https://github.com/codeinthedark/codeinthedark.github.io/blob/master/LICENSE) avant d'utiliser le nom ou le logo Code in the Dark dans votre événement. Les événements communautaires ne peuvent pas être de nature commerciale ; vous ne pouvez pas facturer de frais d'entrée ou de participation à Code in the Dark, ni de frais directs ou indirects dans le cadre d'un autre événement.


### Mise en place du concours
Chaque candidat apporte son propre ordinateur portable à l'événement, mais il est recommandé de leur fournir chacun un moniteur externe. Ces moniteurs doivent être tournés vers le concurrent et vers le public, afin que celui-ci puisse suivre pendant la compétition.
En fonction du nombre de participants, vous souhaiterez peut-être diviser la compétition en plusieurs tours, avec 10 participants dans chaque groupe et un grand match final composé des meilleurs placers des tours précédents.

Les captures d'écran et les ressources du site Web doivent être préparées à l'avance pour chaque groupe (utilisez des sites Web différents à chaque tour) et sont incluses dans le pack d'édition que chaque candidat reçoit. Il est recommandé de disposer des packs sur des clés USB sur lesquelles les candidats peuvent copier le contenu. En savoir plus dans le [dépôt de l'éditeur](https://github.com/codeinthedark/editor) sur la façon de préparer les ressources et de configurer l'éditeur.

Avant le début du tour, aidez les candidats à configurer l'éditeur et assurez-vous qu'ils mettent leur navigateur en **mode présentation** avec la mise en miroir d'écran activée sur l'écran externe. Assurez-vous qu'ils ne commencent pas à coder avant le début du chronomètre.

Puisque le public sera le juge, faites-lui savoir clairement quelles sont les règles afin qu'il puisse facilement repérer quiconque triche et le disqualifier de la compétition.

Lorsque vous êtes prêt à commencer le tour, comptez tout le monde et réglez un chronomètre de 15 minutes que le public peut clairement voir. Une fois les 15 minutes écoulées, dites à tout le monde d'arrêter de coder, enregistrez son fichier et ouvrez-le dans son navigateur préféré pour que tout le monde puisse voter. Utilisez un service de vote comme https://www.mentimeter.com/ pour permettre à tout le monde de voter facilement.

### Instructions aux participants
Imprimez les instructions suivantes et mettez-les à la disposition de chaque concurrent, en les attachant par exemple au moniteur devant eux, face au public.

1. Connectez le moniteur et activez la **mise en miroir d'écran**.
1. Attendez que l'équipage transfère les fichiers d'une clé USB vers votre ordinateur.
1. Ouvrez uniquement le fichier **index.html** de l'éditeur et réglez votre navigateur en **mode présentation**.
1. L'éditeur contient des instructions supplémentaires sur les ressources et sur la manière de sauvegarder le fichier final.
1. Lorsque le temps est écoulé, retirez vos mains du clavier.
1. Ne quittez pas l'éditeur pendant le concours !

### Création de la Pull Request
Pour que votre événement soit présenté sur le site Web [codeinthedark.com](http://codeinthedark.com), créez une pull request dans ce référentiel en ajoutant le code suivant sous la section « Événements organisés par la communauté » :

```html
<p>
[VILLE] &middot; [DATE] &mi-point; <a href="[LINK_TO_RSVP_PAGE]" target="_blank">RSVP</a>
</p>
```

Remplacez `[CITY]`, `[DATE]` et `[LINK_TO_RSVP_PAGE]` par vos informations. Voici un exemple :

```html
<p>
Stockholm &milieu; 22 janvier 2016 &middot; <a href="http://example.com" target="_blank">RSVP</a>
</p>
```
