
import Upload from "../../src/components/Upload";

const userDb = require('../schemas/crudSchema')

const getAll = async () => {
    return userDb.find()
}

module.exports = {
    upload: async (req, res) => {
        const {name,age,email,password} = req.body
        const user = new userDb()
        user.name = name
        user.age = age
        user.email = email
        user.password = password
        await user.save()
        const users = await getAll()
        res.send({users})
        return userDb.upload()
    },
    delete: async (req, res) => {
        const {id} = req.params
        await userDb.findOneAndDelete({_id: id})
        const users = await getAll()
        res.send({users})
        return userDb.delete()
    },
    all: async (req, res) => {
        const users = await getAll()
        res.send({users})
    },
    update: async (req, res) => {
        let {side, id, current} = req.params
        side = side === 'plus' ? 1 : -1

        if(Number(current) === 0 && side === -1) {
            null
        } else {
            await userDb.findOneAndUpdate({_id: id}, {$inc: {quantity: side}})
        }

        const user = await getAll()
        res.send({user})
    }

}


