# Sensitude 1.0

En simpel app för att läsa av data från IoT-sensorer i olika fastigheter med bl.a. temperatur, luftfuktighet och batterinivå. Appen presenterar data i tre nivåer: Översikt av  fastigheter, översikt av en fastighets olika rum och detaljerad vy av ett specifikt rum.

## API
API'et är mockat via My JSON Server (https://my-json-server.typicode.com/martinkrulltott/demo/homes) och är baserat på uppgiftsbeskrivningen. Följade tillägg har gjorts i data setet:

* En kortare beskrivning (description) lades till för att fylla ut UI't i den detaljerade vyn
* Batterinivå (battery) lades till för att fylla ut UI't samt manuellt kunna räkna ut och upptäcka låg batterinivå
* Varningar (warnings) för temperatur och luftfuktighet lades till för att kunna visa upp varningar som sänts ner från API'et.

## Scope / antaganden

Appen presenterar endast data, dvs det går inte att ändra data eller några inställningar.
Uppdateringar sker automatiskt enligt intervall var tioende sekund. Appen är tänkt att först och främst användas på smartphones (minsta bredd 320px, motsvarande iPhone 5 i porträttläge) och är utvecklad mobile first, dvs desktop/större devices ser bara en uppskalad version. Förstasidan är tänkt att visas när användaren precis har loggat in, men själva inloggningen är out-of-scope. Varningar visas om  temperaturen eller luftfuktigheten är för hög/låg (implementerat via API) eller om batterinivån är för låg (implementerat direkt client-side). Appen är testad i iOS Safari på iPhone 7.

## Förkrav

* Node.js
* NPM
* Vue CLI 3
* Google Chrome

## Installation

* Klona projektet lokalt (kommando: git clone {url})
* Navigera till projektets mapp (kommando: cd sensitude)
* Installera projektets paket (kommando: npm i)
* Installera Vue CLI 3 (kommando: npm i -g @vue/cli) vid behov
* Starta Vue CLI (kommando: vue ui)

## Användning

* I Vue CLI, gå till Tasks -> Serve och klicka på Run task. Alternativt kör kommandot npm run serve
* När Serve är igång, klicka på Open app eller gå till http://localhost:8080/
* Appen körs i browsern, för att simulera mobila enheter, använd "Device Toolbar" i Chrome's devtools
* Appen kan även nås via nätverket på http://192.168.1.28:8080/