
## Mutare text sub poza Oanei pe mobil

**Ce se schimba:**

Pe mobil, textul "Cand lucram impreuna, business-ul tau devine si copilul nostru..." va aparea imediat sub poza Oanei (prima poza), in loc sa fie afisat separat deasupra tuturor pozelor.

Pe desktop, textul ramane in aceeasi pozitie (centrat, deasupra grilei de poze).

### Detalii tehnice

**Fisier: `src/components/TeamSection.tsx`**

1. Ascund paragraful general (liniile 34-43) pe mobil cu `hidden md:block`
2. In sectiunea mobil (liniile 66-94), adaug textul dupa poza Oanei (index 0), similar cu cum textul "Cu background-ul..." apare deja dupa poza Andreei (index 1)
