const bodyParser = require('body-parser');
const express = require('express');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        const repoObj = new CityRepository();

        repoObj.createCity({name: "Delhi"});
    });
}

setupAndStartServer();