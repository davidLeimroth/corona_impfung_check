const prompt = require('prompt-sync')();
require('isomorphic-fetch');

// Get the centres
const getCentres = async () => {
    try {
        const results = await fetch("https://www.impfterminservice.de/assets/static/impfzentren.json", {
                "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        return await results.json();
    } catch(err) {
        throw err;
    }
}

// Get all available vaccines
const getVaccines = async () => {
    try {
        const result = await fetch("https://www.impfterminservice.de/assets/static/its/vaccination-list.json", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
        },
        "body": null,
        "method": "GET",
        "mode": "cors",
        });
        return await result.json();
    } catch(err) {
        throw err;
    }
}

// Get the app version
const getVersion = async () => {
    try {
        const result = await fetch("https://002-iz.impfterminservice.de/rest/version", {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
          });
        return await result.text();
    } catch(err) {
        throw err;
    }
}

// Prevent the rate limit
const preventRateLimit = async (url, plz) => {
    try {
        await fetch("https://002-iz.impfterminservice.de/impftermine/service?plz=79108", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }); ;
        await fetch("https://002-iz.impfterminservice.de/styles.e1c947241379d83348fe.css", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/runtime.c51bd5b1c616d9ffddc1.js", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/polyfills.cbf1956b5faecca4486d.js", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/scripts.d8ccca0eb5b9fa47a427.js", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/main.bff22c7079871b904d6a.js", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/staticweb/05e83e07a67ti17911883af09005cae29", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/lineto-circular-book.5b0e4a984d88022c145a.woff2", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/assets/static/its/vaccination-list.json", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/rest/version", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/assets/images/header/Logo-116117-v2@2x.png", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/icomoon.44b1854a17ccb5da1d76.ttf?bilkr0", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/lineto-circular-bold.f817e60da2bacff0143b.woff2", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/check.php", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
        await fetch("https://002-iz.impfterminservice.de/favicon.ico", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
              },
            "body": null,
            "method": "GET",
            "mode": "cors",
        });
    } catch(err) {
        throw err;
    }
}

// Get the available vaccines
const getAvailableVaccines = async (url, plz, vaccineCodes) => {
    try {
        const result = await fetch(`${url}rest/suche/termincheck?plz=${plz}&leistungsmerkmale=${vaccineCodes}`, {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
          });
        return await result.text();
    } catch(err) {
        throw err;
    }
}



const run = async () => {
    try {
        console.log("starting...")
        const version = await getVersion();
        if (version !== "de.kvtelematik.terminservice.webpatient-1.51.0") {
            console.warn("warning: the new version of the app might not be compatible");
        }
        const vaccines = await getVaccines();
        const vaccineCodes = vaccines.reduce((a, b) => {
            if (a.length === 0) return a + b.qualification
            return a + "," + b.qualification
        }, "")
        const vaccineCodeMap = vaccines.reduce((a, b) => {
            return a[b.qualification] + b
        }, {})
        
        const centres = await getCentres();
        const states = Object.keys(centres);
        for (let i = 0; i < states.length; i++) {
            console.log(`(${i})`, states[i]);
        }

        let state;

        while (true) {
            let number = prompt(`Welches Bundesland interessiert dich [0-${states.length-1}]? > `);
            if (number < 0 || number >= states.length) {
                console.log(`Es muss eine Zahl von 0-${states.length-1} sein.`)
                continue;
            }
            console.log(`${states[number]}`);
            state = states[number];
            break;
        }

        // console.log(centres[state])
        for (let i = 0; i < centres[state].length; i++) {
            const centre = centres[state][i];
            console.log(`(${i}) ${centre.PLZ} ${centre.Ort} ${centre.Adresse}`);
        }
        number = prompt(`Welches Impfzentrum interessiert dich [0-${centres[state].length-1}]? > `);
        const centre = centres[state][number];
        console.log(`${centre.PLZ} ${centre.Ort} ${centre.Adresse}`);

        (async () => {
            await preventRateLimit(centre.URL, centre.PLZ);
            const availableVaccines = await getAvailableVaccines(centre.URL, centre.PLZ, vaccineCodes);
            if (!availableVaccines.termineVorhanden) {
                console.log("Leider gibt es aktuell keinen freien Termin.")
                return;
            }
            if (availableVaccines.vorhandeneLeistungsmerkmale.length === 0) {
                console.log("Es gibt zwar einen Termin, aber keinen Impfstoff.")
                return
            }

            console.log(`Es gibt folgende(n) Impstoff(e) in ${centre.Ort}`)
            availableVaccines.vorhandeneLeistungsmerkmale.forEach(vaccineCode => {
                console.log(`\t${vaccineCodeMap[vaccineCode].tssname}`);                
            });
  
            console.log(`${centre.URL}impftermine/service?plz=${centre.PLZ}`);
            // https://002-iz.impfterminservice.de/impftermine/service?plz=79108
        })()

        setInterval(async () => {
            // TODO: Check why this isn't working right now using node, but in the browser
            await preventRateLimit(centre.URL, centre.PLZ);
            const availableVaccines = await getAvailableVaccines(centre.URL, centre.PLZ, vaccineCodes);
            console.log(availableVaccines)
            if (!availableVaccines.termineVorhanden) {
                console.log("Leider gibt es aktuell keinen freien Termin.")
                return;
            }
            if (availableVaccines.vorhandeneLeistungsmerkmale.length === 0) {
                console.log("Es gibt zwar einen Termin, aber keinen Impfstoff.")
                return
            }

            console.log(`Es gibt folgende(n) Impstoff(e) in ${centre.Ort}`)
            availableVaccines.vorhandeneLeistungsmerkmale.forEach(vaccineCode => {
                console.log(`\t${vaccineCodeMap[vaccineCode].tssname}`);                
            });
  
            console.log(`${centre.URL}impftermine/service?plz=${centre.PLZ}`);
            // https://002-iz.impfterminservice.de/impftermine/service?plz=79108
        }, 1000*10)

    } catch(err) {
        throw err;
    }
}

run().then().catch(err => console.error(err))