import { openDB } from 'idb';

const initdb = async () => {
  const db = await openDB('jate', 1);
  if (db.objectStoreNames.contains('jate')) {
    console.log('Database already exists');
  } else {
    db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    console.log('Database created');
  }
};

export const putDb = async (content) => {
  console.log('Put into database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ value: content });
  const result = await request;
  console.log('Data saved to the database:', result);
};

export const getDb = async () => {
  console.log('Get from database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('Result:', result);
  return result;
};

initdb();
