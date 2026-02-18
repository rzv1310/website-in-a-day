
## Actualizare og:image și twitter:image cu poza echipei

### Ce se va face

1. Mutarea fișierului `src/assets/echipa_seo_doctor.png` în folderul `public/` — astfel va fi servit static la URL-ul `https://oneday.seo-doctor.ro/echipa_seo_doctor.png` după publicare.

2. Actualizarea `index.html` — înlocuirea URL-ului curent al imaginii din og:image și twitter:image cu noul URL absolut public.

### Modificări tehnice

**Fișiere:**
- Creare `public/echipa_seo_doctor.png` — copiere din `src/assets/`
- `index.html` — actualizare liniile 18 și 23:

```
og:image  → https://oneday.seo-doctor.ro/echipa_seo_doctor.png
twitter:image → https://oneday.seo-doctor.ro/echipa_seo_doctor.png
```

### De ce nu se poate folosi direct din src/assets

Fișierele din `src/assets/` sunt procesate de Vite la build și primesc un hash în nume (ex: `echipa_seo_doctor-a3f9b2.png`). Crawlerele Facebook/Google/Twitter nu pot prezice acest URL și nici nu pot accesa aplicația React. Folderul `public/` este singurul loc unde fișierele sunt servite la URL fix, predictibil.

### Observatie despre dimensiune recomandata

Dimensiunea ideala pentru og:image este **1200 x 630 px**. Daca poza echipei are alt format (ex: patrat sau portret), va fi afisata totusi, dar unele platforme pot adauga margini negre sau taia imaginea. Nu este blocant, dar e bine de stiut.
