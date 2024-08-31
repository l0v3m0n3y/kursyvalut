# kursyvalut
JavaScript library for kursyvalut.info
# main
```js
async function main(){
    const {kursyvalut} = require('./kursyvalut');
    const kursy= new kursyvalut();
    let req=await kursy.crypto_currency()
    console.log(req)
}
main()
```
