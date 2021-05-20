const consumerDb = require('../schemas/crudSchema')

const getAll = async () => {
    return consumerDb.find()
}

module.exports = {
    upload: async (req, res) => {
        const {name,age,email,password} = req.body
        const prod = new consumerDb()
        prod.name = name
        prod.age = age
        prod.email = email
        prod.password = password
        await prod.save()
        const consumers = await getAll()
        res.send({consumers})
    },
    delete: async (req, res) => {
        const {id} = req.params
        await consumerDb.findOneAndDelete({_id: id})
        const consumers = await getAll()
        res.send({consumers})
    },
    all: async (req, res) => {
        const consumers = await getAll()
        res.send({consumers})
    },
    update: async (req, res) => {
        let {side, id, current} = req.params
        side = side === 'plus' ? 1 : -1

        if(Number(current) === 0 && side === -1) {
            null
        } else {
            await consumerDb.findOneAndUpdate({_id: id}, {$inc: {quantity: side}})
        }

        const consumers = await getAll()
        res.send({consumers})
    }
}