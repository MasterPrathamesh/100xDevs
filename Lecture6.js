// // understanding how to creata a http server using express.
// const express = require("express");

// const app = express();

// function sum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + 1;
//         console.log(ans);
//     }
//     return ans;
// }


// app.get("/", function (req, res) {
//     res.send("Hey Prathamesh ! How are you doing ?");
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("The sum of two numbers is : " + ans);
// });

// app.listen(3000);

// creating a server using express with an example of hospital. 
const express = require("express");

// creating a server.
const app = express();

// middleware
app.use(express.json());

// creating a user with a kidney.
const users = [{
    name: "Prathamesh",
    kidneys: [{
        healthy: false
    }]
}];

// getting the number of kidneys in the user.
app.get("/", function (req, res) {
    const johnkidneys = users[0].kidneys;
    const noofkidneys = johnkidneys.length;
    let noofhealthykidneys = 0;
    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            noofhealthykidneys = noofhealthykidneys + 1;
        }
        const noofunhealthykidkeys = noofkidneys - noofhealthykidneys;
        res.json({
            noofkidneys,
            noofhealthykidneys,
            noofunhealthykidkeys
        });
    }
})


// adding a kidney to the user.
app.post("/", function (req, res) {
    console.log(req.body);
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    });
    res.json({
        message: "kidney added successfully"
    });
})

// making all the kidneys healthy.
app.put("/", function (req, res) {
 for(let i = 0 ; i < users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true; 
 }
 res.json({
    message: "all kidneys are healthy now"})
})

// removing all the kidneys which are not healthy.
app.delete("/", function (req, res) {
    // if atleast one unhealthy is there do this, else return 411; 
    if(isThereAtleastOneUnhealthyKidney()){
                const newkidneys = [];
        for(let i = 0 ; i < users[0].kidneys.length; i++){
                if(users[0].kidneys[i].healthy){
                    newkidneys.push({
                        healthy: true
                    })
            }
            users[0].kidneys = newkidneys;
            res.json({
                message: "all kidneys are healthy now"
            });
        }
    }else{
        res.status(411).json({
            message: "there is no unhealthy kidney"
        })
    }
    



   let  atleastOneUnhelthyKidney = false ;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhelthyKidney = true;
            break;
        }
    }
    
   const newkidneys = [];
   for(let i = 0 ; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
    }
    users[0].kidneys = newkidneys;
    res.json({
        message: "all kidneys are healthy now"
    })
   }
})

function isThereAtleastOneUnhealthyKidney(kidneys) {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
            break;
        }
    }
    return false;
}

app.listen(3000);