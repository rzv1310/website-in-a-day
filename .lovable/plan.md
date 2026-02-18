
## Modificări planificate

### 1. Linkuri WhatsApp pe toate butoanele (exceptând Hero Section)

Numărul de contact: **+40 742 702 982** → `https://wa.me/40742702982`

Butoanele care vor primi link WhatsApp:

| Fișier | Buton |
|---|---|
| `TeamSection.tsx` | "Vreau Site în 24 de ore !" |
| `PackagesSection.tsx` | "Vreau Să Mă Programez !" |
| `PackagesSection.tsx` | "Vreau Experiența Platinum !" |
| `CtaSection.tsx` | "Programează un apel" |

Butonul din `HeroSection.tsx` ("Știm că vrei să afli mai mult") rămâne neschimbat — face scroll la `#pregatire`.

---

### 2. Texte și poze neselectionabile (user-select: none)

Se adaugă clasa Tailwind `select-none` la elementul rădăcină `<div>` din `Index.tsx`, astfel toate secțiunile moștenesc această proprietate fără a modifica fiecare componentă în parte.

```css
/* echivalent cu: */
user-select: none;
-webkit-user-select: none;
```

---

### 3. Poze cu pointer-events: none

Se adaugă clasa `pointer-events-none` la toate tagurile `<img>` din:

- `RequirementsSection.tsx` (poza echipă)
- `TeamSection.tsx` (pozele membrilor echipei — desktop + mobile)
- `TestimonialsSection.tsx` (avatarele din testimoniale — via clasa pe `AvatarImage`)

---

### Fișiere modificate

1. `src/pages/Index.tsx` — adaugă `select-none` pe wrapper-ul principal
2. `src/components/TeamSection.tsx` — link WhatsApp pe buton + `pointer-events-none` pe `<img>`
3. `src/components/PackagesSection.tsx` — link WhatsApp pe ambele butoane
4. `src/components/CtaSection.tsx` — link WhatsApp pe buton
5. `src/components/RequirementsSection.tsx` — `pointer-events-none` pe `<img>`
6. `src/components/TestimonialsSection.tsx` — `pointer-events-none` pe `AvatarImage`
