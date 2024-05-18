let samples = require("../assets/samples.js");

let base_url = "https://semiconductor.withgoogle.com/static/samples/"

// const fs = require('fs');

let res = ''
for (let k in samples) {
    let v = samples[k]
    for (let kk in v) {
        let vv = v[kk]
        vv = vv.replaceAll(' ', '%20')
        let url = "wget " + base_url + vv + '\n';
        res += url
    }
}

// fs.writeFileSync()
console.log(res)