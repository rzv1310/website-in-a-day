
# Widget Accesibilitate pentru Persoane cu Dizabilități

## Ce se va construi

Un widget fix în colțul din stânga-jos al paginii, vizibil pe toate secțiunile, cu un buton de activare (iconița de accesibilitate) și un panou cu 3 module + buton de reset, totul în limba română.

## Structura widgetului

**Buton de activare** — fix, stânga-jos, cu iconița universală de accesibilitate (♿).

**Panou (se deschide la click)** cu 3 secțiuni:

### 1. Module Conținut (Content Modules)
- Mărime Font — butoane + / − cu stare afișată
- Font Lizibil — toggle (activează font Arial/sans-serif mai lizibil)
- Înălțime Rând — butoane + / −
- Cursor Mare — toggle (mărește cursorul mouse-ului)

### 2. Module Culoare (Color Modules)
- Contrast Luminos — toggle (fundal alb intens, text negru)
- Contrast Ridicat — toggle (fundal negru, text galben)
- Monocrom — toggle (desaturează culorile paginii)

### 3. Module Orientare (Orientation Modules)
- Linie de Citire — toggle (o linie orizontală urmărește mouse-ul)
- Mască de Citire — toggle (întunecare parțială a ecranului pentru focus)
- Ascunde Imagini — toggle (ascunde toate imaginile din pagină)

**Buton Reset** — resetează toate setările la default.

## Implementare tehnică

### Fișiere noi
- `src/components/AccessibilityWidget.tsx` — componenta completă

### Fișiere modificate
- `src/pages/Index.tsx` — importare și adăugare `<AccessibilityWidget />` la finalul paginii

### Cum funcționează efectele
- **Mărime Font**: aplică `font-size` pe `document.documentElement` (scala rem)
- **Font Lizibil**: adaugă clasă CSS pe `body` ce forțează `font-family: Arial, sans-serif`
- **Înălțime Rând**: modifică `line-height` pe `document.documentElement`
- **Cursor Mare**: injectează CSS cursor custom de 64px
- **Contrast Luminos / Ridicat / Monocrom**: adaugă clase CSS pe `<html>` cu filtre sau override-uri de culori
- **Linie de Citire**: div fix care urmărește `mousemove`
- **Mască de Citire**: overlay semi-transparent cu "fereastră" în zona cursorului
- **Ascunde Imagini**: aplică `img { visibility: hidden }` prin clasă CSS

Toate efectele sunt gestionate în React cu `useState` și `useEffect`, fără librării externe.

### Stilizare
- Panou alb cu umbră, border-radius, lățime ~320px
- Culorile accentului maro-auriu din tema existentă
- Iconițe din `lucide-react` (deja instalat): `Accessibility`, `Plus`, `Minus`, `Sun`, `CircleHalf`, `Monitor`, `Type`, `AlignJustify`, `Pointer`, `MoveHorizontal`, `Ban`, `Image`, `Link`, `RotateCcw`
- Text complet în română
