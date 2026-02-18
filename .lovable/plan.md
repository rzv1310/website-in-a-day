
## Înlocuire poza lui John cu Ioan

### Ce se schimbă

1. **Copiere imagine** — `user-uploads://ioan.jpeg` → `src/assets/ioan.jpeg`

2. **`src/components/TeamSection.tsx`**:
   - Import-ul `johnImg` se înlocuiește cu `ioanImg` (din `@/assets/ioan.jpeg`)
   - În array-ul `team`, membrul `{ name: "John", img: johnImg }` devine `{ name: "Ioan", img: ioanImg }`

### Fișiere modificate

| Fișier | Modificare |
|---|---|
| `src/assets/ioan.jpeg` | Fișier nou copiat din upload |
| `src/components/TeamSection.tsx` | Import nou + actualizare array `team` |
