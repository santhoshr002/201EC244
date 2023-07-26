const express = require('express');
const app = express();
app.use(express.json());

const api = 'http://20.244.56.144/train/register';

let trains = [
    {
        "trainName" : "Chennai Exp",
        "trainNumber" : "2344",
        "departureTime" : {
            "Hours" : 21,
            "Minutes" : 35,
            "Seconds" : 0
        },
        "seatsAvailable" : {
            "sleeper":3,
            "AC" : 1
        },
        "price":{
            "Sleeper" : 3,
            "AC" : 5
        },
        "delayedBy" : 15
    },
    {
        "trainName" : "Hyderabad Exp",
        "trainNumber" : "2341",
        "departureTime" : {
            "Hours" : 23,
            "Minutes" : 55,
            "Seconds" : 0
        },
        "seatsAvailable" : {
            "sleeper":6,
            "AC" : 7
        },
        "price":{
            "Sleeper" : 554,
            "AC" : 1854
        },
        "delayedBy" : 5
    }
]

app.get('/trains', (req, res)=>{
    //res.send(trains);
    try{
        const train =  app.get(`${api}/train/${trainNumber}`);
        return train.data;
    }
    catch(error){
        console.error("error in find train details", error.message);
        throw error;
    }
   
});

app.listen(3000,()=>{
    console.log("server is running");
});