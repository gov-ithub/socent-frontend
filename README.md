# Registrul Unic de Evidenta a Intreprinderilor Sociale - FrontEnd [![Travis build](https://travis-ci.org/gov-ithub/socent-frontend.svg?branch=master)](https://travis-ci.org/gov-ithub/socent) [![Slack Status](https://govitslack.herokuapp.com/badge.svg)](https://govitslack.herokuapp.com) [![Known Vulnerabilities](https://snyk.io/test/github/gov-ithub/socent-frontend/badge.svg)](https://snyk.io/test/github/gov-ithub/socent-frontend)

Construirea unui sistem informatic tip registru electronic ce va permite inregistrarea, modificarea, integrarea și analizarea tuturor datelor privind întreprinderile sociale și întreprinderile sociale de inserție;

Economia Sociale este o tema noua aparuta in adminstratie si lege. Nu exista in acest moment nici un sistem informatic utilizat in administrarea ei. Inscrierile intreprinderilor se fac pe hartie prin dosare depuse la agentii judetene sau municipale.
Proiectul isi doreste a fi un exemplu de arhitectura, experienta vizitatori si de deschidere catre interoperabilitate cu alte sisteme de tip registru din administratie. Avem tot sprijinul administratiei pentru proiect.

## Obiective
- Evidența tuturor întreprinderilor sociale
- Promovarea situației sectorului prin hărți interactive și rapoarte statistice ( #infographics)
- Sistem de înregistrare și de verificare/administrare online

## Platforma de colaborare si coordonare
- [Confluence](https://contribute.gov.ro/confluence/display/SA/Summary): Specificatii proiect
- [JIRA](https://contribute.gov.ro/jira/browse/SE): Taskuri...  
Platformele sunt deschise inregistrarii. Fa-ti un cont si hai in echipa! Avem un sprint pana pe 15 Noiembrie.

## Pentru cine e platforma?
- Antreprenori Sociali: facilitate de inregistrare, editare si comunicare cu administratia
- Publicul larg: informare asupra situatiei Economiei Sociale - impact, raspandire, oportunitati
- Ministerul Muncii si ANOFM: clientul nostru :) centralizare date, usurinta in raportari, posibilitate sa ofere APIs cu date din registru catre alte ministere si publicului larg
- Agentiile Locale: sistem de primire/inregistrare al intreprinderilor sociale, de verificare si atestare, de raportare situatii locale

## Tehnologii folosite
- [React](https://facebook.github.io/react/)
- [Jest](https://facebook.github.io/jest/)
- [npm](https://github.com/npm/npm)
- [Travis](https://travis-ci.org/)
- [Auth0](https://auth0.com)  
- [RoR](http://rubyonrails.org/)  
- [Material Design Components](http://www.material-ui.com)  
Posibil să se schimbe în viitorul apropiat

## Instalare
```
git clone https://github.com/gov-ithub/socent-frontend.git
cd socent-frontend
npm install
```

## Flow
Pentru a folosi Flow este necesară instalarea definițiilor pentru librăriile 3rd party.

```
./node_modules/flow-typed/dist/cli.js install // dependințe locale
./node_modules/flow-typed/dist/cli.js install jest@17 // jest vine cu CRA și trebuie instalate definițiile separat de restul
```

După ce se instalează toate definițiile, typechecker-ul Flow se poate rula cu `npm run-script flow` (prima rulare este mai înceată, următoarele sunt instante).

## Teste
Rulează `npm test`. `npm test` rulează doar testele nou introduse, de la ultimul commit, by default, însă vă permite rularea tuturor testelor (you'll know what to do when you see it).

Ca și framework folosim [Jest](https://facebook.github.io/jest/). [Documentație mai completă >>](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## Development
Pentru Auth0 aveti nevoie de cont pe Auth0 și un Single Page client pentru a testa/dezvolta local. Apoi modificati .env_template in .env cu credentialele voastre. E nevoie sa adaugati in Allowed Callback URLs, Allowed Logout URLs http://localhost:3000/admin, http://localhost:3000, http://localhost:3001/home. la Allowed Origins (CORS) bagati http://localhost:3000  
- `npm run json-server`: adauga in folderul `/api` endpointurile de care ai nevoie. json server le va rula de acolo. [documentatie](https://github.com/typicode/json-server)
- `npm run flow`: Rulează typechecker-ul Flow
- `npm start`: Servește aplicația pe portul 3000
- `npm run build`: Pregătește aplicația pentru deployment (include minification, bundling, etc)
- `npm run eject`: Elimină dependența de [create-react-app](https://github.com/facebookincubator/create-react-app/). Poate va fi necesar, dar până atunci please don't touch.

Un ghid foarte succint pentru dezvoltarea pe un mediu Windows il gasesti [aici](windows-dev.md) 

## Pull Request cheat-sheet
- Ai un summary complet? Trebuie să fie clar: ce schimbare aduce diff-ul, cum ai testat, și în cazuri unde se fac schimbări majore, dacă e cazul, avem un revert plan?
- Ai scris teste pentru codul nou adăugat/modificat?
- Ai făcut un self review pe propriul diff urmărind [guidelines](https://github.com/gov-ithub/guidelines/blob/master/CODE_REVIEW.md)?

Dacă răspunsul e "da" pentru toate 3, procesul de code review ar trebui să fie destul de painless, nice work.

## Pull Requests > Issues
Preferă pull request-uri peste issues unde e posibil, pull request-urile sunt primite cu brațele deschise oricând.

## Cum poti intra in contact cu echipa?
Prin email catre cezar.neaga@ithub.gov.ro sau mai rapid pe [Slack](https://govithub.slack.com/messages/socent/details/)

**Made with :heart: by [GovITHub](http://ithub.gov.ro)**
