class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    };
    getAllCharactes() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id){
        return this.getResource(`/characters/${id}`);
    }
    getAllHouses() {
        return this.getResource(`/houses`);
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }
}

const got = new GotService();

got.getAllCharactes()
    .then(res => {
        res.forEach( item => console.log(item.name));
    });

got.getCharacter(130)
    .then(res => console.log(res));
got.getAllHouses() 
    .then(res => {
        res.forEach( item => console.log(item.name));
    });
got.getHouse(4)
    .then(res => console.log(res.name));
