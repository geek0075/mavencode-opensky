class Api {
    constructor() {
        // todo
    }
  
    static loginUser(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if ((username && username.toLowerCase().trim() === 'demo') && (password && password.toLowerCase().trim() === 'demo')) {
                    resolve({ username:username, token:'87378ubUGVuyg7vYUGVhdh#4826dgTjsdgbsybdsuy983646' });
                } else {
                    reject(new Error(`Invalid username or password`)); 
                }
            }, 5000);
        });
    }
  
    static fetchFlights(airport, begin, end) {
        console.log(`Api.fetchFlights: airport => ${airport}, begin => ${begin}, end => ${end}`);
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                const arrivalsUrl = `https://opensky-network.org/api/flights/arrival?airport=${airport}&begin=${begin}&end=${end}`;
                const arrivals = JSON.parse(`[
                    {
                        "icao24":"ac85cc",
                        "firstSeen":1517224673,
                        "estDepartureAirport":null,
                        "lastSeen":1517228339,
                        "estArrivalAirport":"KATL",
                        "callsign":"DAL2261 ",
                        "estDepartureAirportHorizDistance":null,
                        "estDepartureAirportVertDistance":null,
                        "estArrivalAirportHorizDistance":10852,
                        "estArrivalAirportVertDistance":2392,
                        "departureAirportCandidatesCount":0,
                        "arrivalAirportCandidatesCount":3
                    },
                    {
                        "icao24":"ab44af",
                        "firstSeen":1517213133,
                        "estDepartureAirport":null,
                        "lastSeen":1517228014,
                        "estArrivalAirport":"KATL",
                        "callsign":"DAL836",
                        "estDepartureAirportHorizDistance":null,
                        "estDepartureAirportVertDistance":null,
                        "estArrivalAirportHorizDistance":11121,
                        "estArrivalAirportVertDistance":2468,
                        "departureAirportCandidatesCount":0,
                        "arrivalAirportCandidatesCount":2
                    },
                    {
                        "icao24":"acc5ee",
                        "firstSeen":1517226334,
                        "estDepartureAirport":null,
                        "lastSeen":1517227511,
                        "estArrivalAirport":"KATL",
                        "callsign":"DAL1337 ",
                        "estDepartureAirportHorizDistance":null,
                        "estDepartureAirportVertDistance":null,
                        "estArrivalAirportHorizDistance":11524,
                        "estArrivalAirportVertDistance":2384,
                        "departureAirportCandidatesCount":0,
                        "arrivalAirportCandidatesCount":3
                    }
                ]`);
                const departuresUrl = `https://opensky-network.org/api/flights/departure?airport=${airport}&begin=${begin}&end=${end}`;
                const departures = JSON.parse(`[
                    {
                        "icao24":"a33ecc",
                        "firstSeen":1517230612,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517235993,
                        "estArrivalAirport":"KMMK",
                        "callsign":"N308U   ",
                        "estDepartureAirportHorizDistance":8851,
                        "estDepartureAirportVertDistance":1904,
                        "estArrivalAirportHorizDistance":11328,
                        "estArrivalAirportVertDistance":1987,
                        "departureAirportCandidatesCount":0,
                        "arrivalAirportCandidatesCount":1
                     },
                     {
                         "icao24":"a8c802",
                         "firstSeen":1517230479,
                         "estDepartureAirport":"KATL",
                         "lastSeen":1517235447,
                         "estArrivalAirport":"KFXE",
                         "callsign":"NKS231",
                         "estDepartureAirportHorizDistance":12338,
                         "estDepartureAirportVertDistance":1081,
                         "estArrivalAirportHorizDistance":6520,
                         "estArrivalAirportVertDistance":1801,
                         "departureAirportCandidatesCount":0,
                         "arrivalAirportCandidatesCount":5
                    },
                    {
                        "icao24":"ac21e4",
                        "firstSeen":1517230232,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517233529,
                        "estArrivalAirport":"KPIE",
                        "callsign":"DAL1572",
                        "estDepartureAirportHorizDistance":13002,
                        "estDepartureAirportVertDistance":1226,
                        "estArrivalAirportHorizDistance":7260,
                        "estArrivalAirportVertDistance":1871,
                        "departureAirportCandidatesCount":0,
                        "arrivalAirportCandidatesCount":5
                    },
                    {
                        "icao24":"aa7fa1",
                        "firstSeen":1517230105,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517232114,
                        "estArrivalAirport":null,
                        "callsign":"DAL1148 ",
                        "estDepartureAirportHorizDistance":8012,
                        "estDepartureAirportVertDistance":799,
                        "estArrivalAirportHorizDistance":null,
                        "estArrivalAirportVertDistance":null,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":0
                    },
                    {
                        "icao24":"acfc4b",
                        "firstSeen":1517230022,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517237417,
                        "estArrivalAirport":"KMSP",
                        "callsign":"DAL1866 ",
                        "estDepartureAirportHorizDistance":7914,
                        "estDepartureAirportVertDistance":898,
                        "estArrivalAirportHorizDistance":3730,
                        "estArrivalAirportVertDistance":96,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":3
                    },
                    {
                        "icao24":"a8b56f",
                        "firstSeen":1517229946,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517234501,
                        "estArrivalAirport":null,
                        "callsign":"NKS768  ",
                        "estDepartureAirportHorizDistance":9401,
                        "estDepartureAirportVertDistance":853,
                        "estArrivalAirportHorizDistance":null,
                        "estArrivalAirportVertDistance":null,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":0
                    },
                    {
                        "icao24":"a716f6",
                        "firstSeen":1517229831,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517235386,
                        "estArrivalAirport":null,
                        "callsign":"DAL1070 ",
                        "estDepartureAirportHorizDistance":8011,
                        "estDepartureAirportVertDistance":952,
                        "estArrivalAirportHorizDistance":null,
                        "estArrivalAirportVertDistance":null,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":0
                    },
                    {
                        "icao24":"ab09b4",
                        "firstSeen":1517229438,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517244537,
                        "estArrivalAirport":"KLAX",
                        "callsign":"DAL110  ",
                        "estDepartureAirportHorizDistance":9567,
                        "estDepartureAirportVertDistance":769,
                        "estArrivalAirportHorizDistance":2218,
                        "estArrivalAirportVertDistance":7,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":5
                    },
                    {
                        "icao24":"ab43c6",
                        "firstSeen":1517229362,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517232629,
                        "estArrivalAirport":"KIND",
                        "callsign":"DAL2196 ",
                        "estDepartureAirportHorizDistance":7530,
                        "estDepartureAirportVertDistance":807,
                        "estArrivalAirportHorizDistance":21482,
                        "estArrivalAirportVertDistance":1296,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":0
                    },
                    {
                        "icao24":"a7debf",
                        "firstSeen":1517227633,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517231999,
                        "estArrivalAirport":"KFME",
                        "callsign":"NKS554  ",
                        "estDepartureAirportHorizDistance":14834,
                        "estDepartureAirportVertDistance":1432,
                        "estArrivalAirportHorizDistance":13702,
                        "estArrivalAirportVertDistance":502,
                        "departureAirportCandidatesCount":0,
                        "arrivalAirportCandidatesCount":2
                    },
                    {
                        "icao24":"aaa28d",
                        "firstSeen":1517227573,
                        "estDepartureAirport":"KATL",
                        "lastSeen":1517232355,
                        "estArrivalAirport":"KMDW",
                        "callsign":"SWA158  ",
                        "estDepartureAirportHorizDistance":10454,
                        "estDepartureAirportVertDistance":875,
                        "estArrivalAirportHorizDistance":2563,
                        "estArrivalAirportVertDistance":21,
                        "departureAirportCandidatesCount":1,
                        "arrivalAirportCandidatesCount":2
                    }
                ]`);
                const flights = { arrivals, departures };
                resolve(flights);
            }, 5000);
        });
    }
}
export default Api;