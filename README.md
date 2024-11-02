# Project README

## Overzicht

Dit project betreft het opzetten van analytics en het integreren van een interactieve kaart op een website, met als doel bezoekersgedrag te analyseren en locatiegegevens op een kaart te visualiseren. Het project maakt gebruik van verschillende analysetools en een zelf-gehoste kaartoplossing om kosten te beperken.

## Functionaliteiten

1. **Analytics Integratie**
   - Er zijn verschillende analytics-platforms geïmplementeerd om bezoekersgedrag op de website te meten, waaronder Statcounter, Google Analytics, Hotjar en Adobe Analytics. 
   
2. **Interactieve Kaart**
   - Een interactieve kaart is toegevoegd aan de website, waar gebruikers locaties kunnen invoeren. Deze locaties worden gemarkeerd op de kaart. Door de beperkingen van de gratis analytics-tools werd uiteindelijk een alternatieve kaartintegratie gekozen.

3. **Database (Planning)**
   - Er zijn voorbereidingen getroffen voor het opslaan van kaartgegevens in een database via een Express-server en MongoDB. 

## Analytics Tools Evaluatie

1. **Statcounter**
   - **Voordelen:** Heatmaps en bezoekerspaden beschikbaar.
   - **Nadelen:** Beperkt in de gratis versie.
   - **Ervaring:** Installatie was eenvoudig, maar de meeste functies vereisen een betaalde versie.

2. **Google Analytics**
   - **Voordelen:** Veelgebruikt, eenvoudige installatie.
   - **Nadelen:** Minder gedetailleerde bezoekersinformatie zonder betaalde modules en geen visuele weergaven van heatmaps.
   - **Ervaring:** Installatie vereiste veel keuzes zonder duidelijke uitleg, wat de configuratie soms ingewikkeld maakte.

3. **Hotjar**
   - **Voordelen:** Snelle en eenvoudige installatie.
   - **Nadelen:** Geen directe data-inname, wat leidde tot enige verwarring.
   - **Ervaring:** Data-inname begon na een vertraging van 2 uur; vereiste monitoring.

4. **Adobe Analytics**
   - **Voordelen:** Geavanceerde functies voor realtime data-analyse, segmentatie en integratie met andere Adobe-tools.
   - **Nadelen:** Alleen beschikbaar als betaalde service, wat het minder toegankelijk maakt voor kleine projecten.
   - **Ervaring:** Niet getest vanwege de hoge kosten, maar uitgebreid onderzocht.

## Kaart Integratie

- **Gebruik van Google Maps** was oorspronkelijk gepland, maar vanwege de kosten werd gezocht naar een gratis alternatief. Uiteindelijk is gekozen voor Leaflet, waarmee een kaart op de website kan worden weergegeven.
- De gebruiker kan een locatie invoeren via een tekstveld, dat vervolgens als markering op de kaart verschijnt.
- Het doel was om meerdere markeringen op te slaan in een database, waarvoor MongoDB in overweging werd genomen. Vanwege het ontbreken van een backend-server kon MongoDB echter niet worden geïntegreerd in dit frontend-project.

## Databaseverbinding

- **MongoDB Realm** is geprobeerd voor de verbinding met de database, maar dit bleek uitdagend zonder backend-server.
- **Alternatief:** het opzetten van een Express-server om de MongoDB-verbinding te realiseren werd onderzocht als toekomstige oplossing.
- Documentatie en bronnen voor database-integratie zijn toegevoegd om de implementatie op een later tijdstip mogelijk te maken.

## Gebruikte Bronnen

- **Kaartintegratie:** [Leaflet](https://leafletjs.com/)
- **Analytics Platforms:** [Statcounter](https://statcounter.com/demo/summary/), [Google Analytics](https://marketingplatform.google.com/about/analytics/), [Hotjar](https://www.hotjar.com/), [Adobe Analytics](https://business.adobe.com/products/analytics/adobe-analytics.html)
- **Database Verbinding en Documentatie:** Diverse MongoDB en Express-gerelateerde artikelen en forums, zoals StackOverflow en MongoDB-documentatie.

## Conclusie en Toekomstige Ontwikkeling

Het project biedt een basis voor analytics-integratie en een interactieve kaartweergave. Voor toekomstig werk wordt gekeken naar het toevoegen van een backend-server om kaartdata op te slaan in een database en de implementatie van meer geavanceerde analytics-oplossingen.
