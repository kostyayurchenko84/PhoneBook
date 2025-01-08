import sql from 'better-sqlite3';
const db = sql('phones.db');

export async function getPhones() {
    //умышленная задержка для теста статусов во время загрузки
    await new Promise((resolve) => setTimeout(resolve,2000));
    return db.prepare('SELECT * FROM phones').all();
}