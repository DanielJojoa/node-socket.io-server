const Band = require("./band");

class Bands {
    constructor(){
        this.bands = [];
    }
    addBand(band){
        this.bands.push(new Band(band));
    }

    getBands(){
        return this.bands
    }
    deleteBand(id){
        this.bands = this.bands.filter(band => band.id !== id);
    }

    voteBand(id){
        console.log(id);
    this.bands= this.bands.map(band => {
            if(band.id === id){
                band.votes++;
            }
            return band;
        });
        return 
    }
}
module.exports = Bands;