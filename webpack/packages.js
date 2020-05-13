const fs = require('fs');

let packages = [];

let folders = fs.readdirSync('./packages');

folders.forEach((folder) => {
    try {
        let json = __dirname + '/../packages/' + folder + '/package.json';
        if (fs.existsSync(json)) {
            let raw = fs.readFileSync(json);
            let pck = JSON.parse(raw);

            packages.push({id:folder, name:pck.description});
        }
    } catch(err) {
        console.error(err)
    }
});

module.exports = packages;