
import { omitBy } from 'lodash';
import { firestore } from './firebase';

function writeData (path, data) {
    const dataFiltered = omitBy(data, (v) => typeof v === 'string' && !v.length);
    dataFiltered._metadata = { createdAt: +new Date() };
    return firestore.doc(path).set(dataFiltered);
}

function readData (path) {
    return firestore.collection(path)
        .get()
        .then((col) => {
            const docs = [];
            col.forEach((doc) => {
                docs.push(Object.assign(doc.data(), { id: doc.id }));
            });
            return docs;
        });
}

export { writeData, readData };
