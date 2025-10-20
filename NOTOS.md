
# Design System

* ✅ Header
* ✅ Button
* ✅Footer
* Main
* Image
* ✅Input
* ✅Card
* ✅AutoComplete
* ✅SearchField
* Loader
* ✅Skeleton

# Intentions :

> Avec Stories associées

## Footer
> Clément 
 * Composant Responsive footer
 * Permet d'afficher un footer responsive
 * Contient des liens vers les réseaux sociaux et les informations légales
 * Et des informations de contact personnalisables

## Image
 * Composant Image
 * Composant d'affichage d'une image avec gestion des erreurs de chargement.
 * Si l'image ne peut pas être chargée, une image par défaut est affichée.
 * 
 * Peut recevoir une description pour l'attribut alt.
 * S'affichant overlay sur l'image.

## Input
* Composant Input
 * Composant réutilisable pour les champs de formulaire
 * 
 * Personnalsation de :
 * - type (text, password, email, etc.)
 * - placeholder
 * - value
 * - onChange
 * - regle de validation (pattern, required, etc.)
 * 
 * Affiche un message d'erreur si la validation échoue
 * Reflete l'état de validation visuellement 
 
## Card
 * Composant Card
 * Composant de base pour afficher une carte avec un titre et du contenu.
 * Permet aussi de gérer des boutons d'action.
 * Peut etre ouvert ou fermé.
 * 
## AutoComplete
 * Composant AutoComplete
 *
 * Permet de suggérer des options à l'utilisateur pendant la saisie.
 * Debounce la saisie pour éviter trop de calculs.
 * Gère la navigation clavier (flèches haut/bas, entrée, échap).
 * Les suggestions sont filtrées en fonction de la saisie.
 * Et sont fournies via le props

## SearchField
 * Composant SearchField
 * 
 * Permet d'afficher un champ de recherche avec une icône
 * Permet la recherche multiple (plusieurs tags) via le separateur ","
 * Memorise et affiche la derniere valuer recherchee sous la forme d'un tag cliquable pour la remettre dans le champ
 
## Loader
 * Composant Loader
 *
 * Reprensent un incicateur de chargement
 * Soit une progression determinee
 * ProgressBar ou Spinner

## Skeleton
 * Composant Skeleton
 * Permet de representer 
 * Un Image (dimensionable)
 * Une Card (dimensionable)
 * Un bloc de texte(nombre de ligne et dimensionable)
 *
 * Un bloc de texte avec titre (nombre de ligne et dimensionable)
 *
 * Un bouton

