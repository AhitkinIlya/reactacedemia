export default class getDB {
    getResource = async (item) => {
        const res = await fetch('/db.json')
        return await res.json()
            
        
    }
    getBest = async () => {
        const res = await this.getResource()
        return res.bestsellers.map(this._transformBest)
    }
    getCoffee = async () => {
        const res = await this.getResource()
        return res.coffee.map(this._transformCoffee)
    }
    getGoods = async () => {
        const res = await this.getResource()
        return res.goods.map(this._transformGoods)
    }

    _transformBest = (best) => {
        return {
            id: Math.floor(Math.random() + 100) + best.name,
            name: best.name,
            url: best.url,
            price: best.price
        }
    }
    _transformCoffee = (coffee) => {
        return {
            id: Math.floor(Math.random() + 100) + coffee.name,
            name: coffee.name,
            country: coffee.country,
            url: coffee.url,
            price: coffee.price,
            description: coffee.description
        }
    }
    _transformGoods = (good) => {
        return {
            id: Math.floor(Math.random() + 100) + good.name,
            name: good.name,
            url: good.url,
            price: good.price
        }
    }
}

