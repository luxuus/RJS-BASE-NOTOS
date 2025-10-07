export { default } from './Button';


/**
 * 
 * Creer un composant Button qui accepte les props suivantes :
 * - children : string (le texte du bouton)
 * - action : function (la fonction à appeler lors du clic)
 * - disabled : boolean (si true, le bouton est désactivé)
 * - level 
 *      - 'primary' : bouton principal (jaune avec texte noir)
 *      - 'optional' : bouton optionnel (noir outline avec texte noir)
 *      - 'critical' : bouton critique (noir avec texte jaune)
 * - size : 'small' | 'medium' | 'large' (taille du bouton)
 * 
 * Utiliser les types UILevel, UISize et UIActionnable définis dans src/core/types/ui.types.ts
 */