export default class gotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    };
    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}/`);
        return this._transformCharacter(character);
    }
    getAllHouses = async () => {
        const houses = await this.getResource(`/houses`);
        return houses.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const books = await this.getResource(`/books/`);
        return books.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    _extractId = (item) => {
        return item.url.match(/[0-9]+/)[0]
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.die,
            culture: char.culture
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}
