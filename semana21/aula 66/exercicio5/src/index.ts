import knex from 'knex'

export function handler(event: any) {
    const getConnection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        }
    })
    if (!event.name || !event.cartoon || !event.image) {
        throw new Error('Invalid info')
    }
    getConnection().insert({
        name: event.name,
        cartoon: event.cartoon,
        image: event.image
    }).into('Personagens')
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Character successfully added"
        })
    }
}