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
        const arrivalsUrl = `https://opensky-network.org/api/flights/arrival?airport=${airport}&begin=${begin}&end=${end}`;
        const departuresUrl = `https://opensky-network.org/api/flights/departure?airport=${airport}&begin=${begin}&end=${end}`;
        let arrivals = null;
        let departures = null;
        console.log(`Api.fetchFlights: arrivalsUrl => ${arrivalsUrl}`);
        console.log(`Api.fetchFlights: departuresUrl => ${departuresUrl}`);
        console.log(`Api.fetchFlights: airport => ${airport}, begin => ${begin}, end => ${end}`);
        return new Promise((resolve, reject) => {
            fetch(arrivalsUrl)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(`Api.fetchFlights.arrivals: result => ${JSON.stringify(result)}`);
                arrivals = result;
                fetch(departuresUrl)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    console.log(`Api.fetchFlights.departures: result => ${JSON.stringify(result)}`);
                    departures = result;
                    const flights = { arrivals, departures };
                    resolve(flights);
                })
                .catch((error) => {
                    console.log(`Api.fetchFlights.departures: error => ${JSON.stringify(error)}`);
                    reject(error); 
                });
            })
            .catch((error) => {
                console.log(`Api.fetchFlights.arrivals: error => ${JSON.stringify(error)}`);
                reject(error); 
            });
        });
    }
}
export default Api;