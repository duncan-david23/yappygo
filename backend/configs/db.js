import pg from 'pg'


const {PG_HOST, PG_PORT, PG_PASSWORD, PG_DATABASE, PG_USER} = process.env;

export const db = new pg.Client({
    user:PG_USER,
    host:PG_HOST,
    database:PG_DATABASE,
    password:PG_PASSWORD,
    port:PG_PORT
})