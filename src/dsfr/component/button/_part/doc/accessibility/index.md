---
title: Accessibilité du Bouton
---

# Bouton

:::dsfr-doc-tab-navigation
- [Usage](../index.md)
- [Design](../design/index.md)
- [Développement](../develop/index.md)
- Accessibilité

:::

# Règles d'accessibilité du composant Bouton
## Règles générales
### différentiation entre bouton et liens
- Il est nécessaire de bien différencier les boutons des liens. Lorsque l'action déclenchée agit sur la page elle-même il faut utiliser un bouton.
### Contraste
- Le contraste entre la couleur de fond du bouton et du texte doit être de 4.5:1.
### Libellé
- Les libellés doivent être explicites et pertinents.
- L’utilisation de l’attribut title (ou aria-label) doit être utilisé uniquement si l’intitulé du bouton n’est pas explicite (ce qui n’est pas recommandé).
- Pour aria-label, la valeur utilisée doit reprendre l'intitulé visible (indispensable pour les utilisateurs en commande vocale).
### Focus
- Le focus (propriété outline) ne doit être ni dégradé ni supprimé.

## Règles spécifiques
### Bouton icône seule
- Ajouter un attribut title contenant la fonction du bouton.
- Vérifier que la couleur de l'icône est suffisamment contrastée (rapport de 3:1) par rapport à la couleur du fond du bouton.
- Si le bouton utilise plusieurs icônes de couleur différente pour symboliser plusieurs états, assurez-vous que le rapport de contraste entre les différentes couleurs est de 3:1 au moins.
