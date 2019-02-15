export default class getDB {
    getResource = async () => {
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
    getCoffeeDetails = async (name) => {
        const res = await this.getResource()
        const res1 = res.coffee.map(this._transformCoffee)
        console.log(res1)
        return res1.filter((item) => {
            return item.id === name
        })
    }

    _transformBest = (best) => {
        return {
            id: best.name.replace(/ .*/,''),
            name: best.name,
            url: best.url,
            price: best.price
        }
    }
    _transformCoffee = (coffee) => {
        return {
            id: coffee.name.replace(/ .*/,''),
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

