var mqtt = require('mqtt');
var localCfg = require('./config.json');

// Array of pseudo random temperatures
var temp1 = [15,17,18.5,20,21.5,23,24,22.2,19,18];
// Array of pseudo random relative humidities
var humidity1 = [50,55,61,68,65,60,53,49,45,47];
// Counter to select from array.
var counter1 = 0;
// Location of DHBW Paulinenstr. 50
var lat=48.7729543;
var long=9.1677613;

var host="mqtt://"+localCfg.ORG+".messaging.internetofthings.ibmcloud.com";
console.log("URL: "+host);
var options={
        clientId:"d:"+localCfg.ORG+":"+localCfg.DEVICE_TYPE+":"+localCfg.DEVICE_ID,
        username:"use-token-auth",
        password:localCfg.PASSWORD
        };
console.log("Options: ", options);       
var client  = mqtt.connect(host, options);
    client.on("connect",function(){	
    console.log("Client connected  "+client.connected);
    });

client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)
    });

var topic="iot-2/evt/"+localCfg.EVENT+"/fmt/json";
console.log("Topic: "+topic);

//publish every 5 secs
var timer_id=setInterval(function(){publish();},5000);

//publish function
function publish(){
  msg =  JSON.stringify(
      {
        d:{
          "temp" : temp1[counter1],
          "humidity" : humidity1[counter1],
          "latitude" : lat,
          "longitude" : long
            }
      }
    );
  console.log("Publishing",msg);
if (client.connected == true){
  client.publish(topic,msg);
    }
counter1 = counter1+1;
if (counter1 > 9) counter1 = 0;    
}
