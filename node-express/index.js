const express = require('express');
const app = express(); //here the express server is actually instantiated 
const port = 3000;


const serverLimit = 100;
//this exists because I want to be able to name servers appropriately.
//let pool = [];

//PUT (serverType)
//  /server/allocateNewServerName
const allocate = (pool = [], serverType = "") => {

    //allows for easier comparisons without worrying about other serverTypes
    const filteredPool = pool.filter(el => el.includes(serverType))
    filteredPool.sort();

    //could also just use the pool.length
    for (let i = 0; i < serverLimit; i++) {

        const serverName = `${serverType}${i + 1}`;

        if (!(i > filteredPool.length)) {

            if (filteredPool[i] !== serverName) {
                pool.push(serverName);
                return serverName;
            }
        }
    }
} 

//DELETE (specificServer)
// /server/deallocateSpecificServer
const deallocate = (pool = [], specificServer = "") => {

    const indexOfServer = pool.indexOf(specificServer);

    if (indexOfServer !== -1) {
        pool.splice(indexOfServer, 1);
    }

    console.log(pool);


    return pool;

}


app.use(express.static('public'));

//server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)

    console.log(deallocate(['API2', 'API1', 'SEARCH1', 'SEARCH5'], 'API2'));
});

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/public/index.html');
});


/*

if (typeof localStorage === 'undefined' || localStorage === null) {
    LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
    localStorage.setItem('viewCounter', 0);
}

//endpoints

app.get('/cookie', (req, res) => {
    res.send('oreos');
});

app.post('/', (req, res) => {
    res.send('GOT A POST');
});

app.post('/viewCount', (req, res) => {

    localStorage.setItem('viewCounter', parseInt(localStorage.getItem('viewCounter')) + 1);

    console.log('viewCounter: ' + localStorage.getItem('viewCounter'));

    res.send(localStorage.getItem('viewCounter'));
});

app.put('/', (req, res) => {
    res.send('GOT A PUT');
});

app.delete('/', (req, res) => {
    res.send('GOT A DELETE');
});


*/
