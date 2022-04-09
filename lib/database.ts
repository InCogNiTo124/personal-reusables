import sqlite from 'better-sqlite3';

const db = new sqlite('./db.sqlite3');

export default db;
