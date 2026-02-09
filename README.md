# DevOps Vue Products

Prosta aplikacja do projektu z DevOps:
- Backend: Node.js + Express (endpointy: `/` i `/products`)
- Frontend: Vue 3 (CDN) – wersja statyczna publikowana na GitHub Pages
- Testy: Jest + Supertest (min. 2 testy)
- CI: GitHub Actions (testy na Pull Request)
- CD: GitHub Actions → GitHub Pages
- Dodatkowe: automatyczne wersjonowanie (tagi + GitHub Releases)

## Demo (public)
GitHub Pages: 
https://tajnyloginnahub.github.io/devops-vue-products/
JSON:  
- na Github-pages tylko statyczne strony.

## Endpointy backendu (lokalnie / na serwerze Node)
- `GET /` – strona główna
- `GET /products` – zwraca JSON z produktami

## Uruchomienie lokalne
Wymagania: Node.js 20 (lub 18+)

```bash
npm install
npm run dev