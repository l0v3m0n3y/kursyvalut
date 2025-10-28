class kursyvalut{
    constructor(){
        this.api = "https://www.kursyvalut.info/api"
        this.headers={"Accept-Encoding":"gzip","Authorization":"Basic a3Vyc3l2YTpNaWUweGVlTjE1","Connection":"Keep-Alive","Host":"www.kursyvalut.info","User-Agent":"okhttp/4.9.0"}
    }
    async exchangers_list(country){
        let req=await fetch(`${this.api}/exchangers/${country}.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async ib_list(country){
        let req=await fetch(`${this.api}/IB/${country}.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async country_list(){
        let req=await fetch(`${this.api}/Country.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async crypto_currency(){
        let req=await fetch(`${this.api}/resources/cryptocurrency.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async currency_list(){
        let req=await fetch(`${this.api}/Currency.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async resources_list(){
        let req=await fetch(`${this.api}/resources/resources.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async stocks_list(){
        let req=await fetch(`${this.api}/resources/stocks.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {kursyvalut};