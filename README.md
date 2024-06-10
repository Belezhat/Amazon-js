# Amazon.js

## Description
Le projet est un clone de la plateforme Amazon, simulant les fonctionnalités principales d'un site de commerce électronique. 
Il permet aux utilisateurs de parcourir des produits, ajouter des articles à leur panier, valider leurs achats, consulter leurs commandes et suivre leurs livraisons.

## Technologies Utilisées
- **HTML/CSS** : Pour la structure et le design des pages web.
- **JavaScript** : Pour les interactions dynamiques et la logique de l'application côté client.
- **Backend** : JSON pour le stockage des données.
- **Tests** : Utilisation de frameworks comme Jasmine pour les tests unitaires.

## Fonctionnalités Principales
1. **Page d'accueil** : Affichage des produits avec la possibilité de les ajouter au panier.
2. **Page de validation des achats** : Processus de paiement et récapitulatif de commande.
3. **Page des commandes** : Consultation des commandes passées par l'utilisateur.
4. **Suivi des commandes** : Fonctionnalité de suivi des livraisons.

## Structure du Projet
```
Amazon-js-main/
├── amazon.html
├── backend/
│ └── products.json
├── checkout.html
├── data/
├── images/
├── orders.html
├── scripts/
├── styles/
├── tests-jasmine/
├── tests/
└── tracking.html
```

## Détails du Backend
Le backend de ce projet est principalement constitué d'un fichier JSON (`products.json`) qui stocke les informations des produits. 
Ce fichier sert de source de données pour l'application, permettant de gérer les produits affichés sur le site.

### Exemple de contenu de `products.json` :
```
[
    {
        "id": "1",
        "name": "Example Product 1",
        "description": "Description of Example Product 1",
        "price": 19.99,
        "image": "path/to/image1.jpg"
    },
    {
        "id": "2",
        "name": "Example Product 2",
        "description": "Description of Example Product 2",
        "price": 29.99,
        "image": "path/to/image2.jpg"
    }
]
```
