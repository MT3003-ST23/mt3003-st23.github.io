---
title: 'Veckoschema'
layout: toc
---

# Veckoschema

## V23: Introduktion till kursverktyg
Den första veckan kommer innehålla administration och avslutas med en provkörning av kursverktygen i laboration 1.
### Mål denna vecka
  - Dina kurskonto på GitHub och RStudio Cloud skall vara kopplade till kursens arbetsytor.
  - Första laborationen inlämnad. (Deadline söndag).

### Kursmaterial
- Hadley Wickham and Garrett Grolemund, R for Data Science (i fortsättningen R4DS): [Kapitel 1, Introduction](https://r4ds.had.co.nz/introduction.html).
- [Kursintroduktion]() (YouTube, 4:28)
- [Kursverktyg och examination]() (YouTube, 5:37)
- [RStudio Cloud introduktion]() (YouTube, 12:52)
- [RMarkdown introduktion]() (YouTube, 14:42)
- [GitHub introduktion]() (YouTube, 13:05)
- [Examination och betyg]() (kurshemsida)

*OBS: Introduktionerna till RStudio Cloud, RMarkdown och GitHub spelades in 2021. Utöver den uppenbara ändringen från ST21 till ST22 har det skett små förändringar i det grafiska gränssnittet till RSTudio Cloud. Detta bör inte orsaka problem.*


## V24:...
### Mål denna vecka
 - Att ha grundläggande förståelse för Rs datatyper.
 - Att kunna skapa enkla diagram och förstå de grundläggande komponenterna i en `ggplot`-visualisering (`data`, `mapping`, `geom`).
### Kursmaterial
 - [R4DS](): Kapitel 2-4.

RStudio Primers:
 - [The Basics]() (Vizualisation och Programming)
 - [Working with tibbles]()
### Övningar
Under rubriken övningar hittar du träningsmaterial som inte ingår i kursens examination. Detta ger bra övning inför inlämningsuppgifterna, med fördelen att du kan fråga och tipsa hur mycket du vill på kursens Discord. Skapa ett separat projekt i RStudio Cloud där du arbetar med övningar och skapa en mapp data i detta projekt där du kan spara de datamaterial vi använder.

Gör inte bara uppgifterna utan experimentera med data och försök hitta på egna frågeställningar att besvara, fråga på Discord om något inte blev som du tänkt.

#### Ettor på stan

Du kan ladda ner en kopia av data från inlämningsuppgift 1 med

```r
download.file("https://github.com/MT3003-ST22/data/raw/main/booli_ettor_2022-05-19.csv",
              "data/booli_ettor_2022-05-19.csv")
```
och läsa in den med
```r
booli_ettor <- read_csv("data/booli_ettor_2022-05-19.csv")
```

Notera att det går bra att läsa direkt från en url, som i
```r
booli_ettor <- read_csv("https://github.com/MT3003-ST22/data/raw/main/booli_ettor_2022-05-19.csv")
```
men vi föredrar att ladda ner filen en gång, då kan vi vara säkra på att vi arbetar med samma material nästa gång vi öppnar projektet. Använd din egen fantasi för att undersöka materialet med enkla figurer, till exempel kan du undersöka

*Faktorvariabler*: Ovanstående övning illustrerar ett vanligt problem. Veckodagarna blir sorterade i alfabetisk ordning medan vi antagligen vill ha dem i kronologisk. Problemet kommer av att en variabel av typen character inte innehåller någon information om kategoriernas ordning, det gör däremot en variabel av typen factor. För att ändra ordning behöver vi alltså göra om `weekdays(published)` till en faktorvariabel. Om vi istället för `weekdays(published)` använder `factor(weekdays(published), levels = c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"))` så ordnas staplarna i den ordning vi angett.

## V..:...
### Mål denna vecka
### Kursmaterial
### Övningar



