const Hobbits = require('./hobbitsModel.js')
const db = require('../data/dbConfig.js')

describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate()
    })

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('insert()', () => {
        it('should insert hobbits into the database', async () => {
            await Hobbits.insert({name: "bilbo"})
            let hobbits = await db('hobbits')
            console.log(hobbits)
            expect(hobbits).toHaveLength(1)           

        })   

    })
})

    describe('remove()', () => {
        it('should remove hobbits from the database', async () => {
            await hobbits.remove(1)
            let hobbits = await db('hobbits')
            console.log(hobbits)
            expect(hobbits).toHaveLength(0)
        })
    })