/**
 * Created by emol on 1/28/17.
 */
let DATA = module.exports = {};
let fs = require('fs');
let appDataJson = "/home/emol/cs/mchack/appData.json";

let data = JSON.parse(fs.readFileSync(appDataJson, 'utf8'));


DATA.update = function (app, command){
    data[app]["command"] = command;
    //alert(data[app]["command"]);
    //fs.writeFileSync(appDataJson, data.toJSON(), 'utf8');
}

DATA.getdata = function () {
    return data;
}

//when we close the program, we save our cached data into disk
DATA.save = function () {

}
DATA.show = function(app){
    alert(data[app]["command"]);
}
