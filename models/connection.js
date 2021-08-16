const { MongoClient } = require('mongodb');
const database = 'sample_crud';
const uri = `mongodb://localhost/${database}`;

let db = null;

function getCollection(collectionName) {
	if(!db) {
		throw new Error('DATABASE_NOT_CONNECTED');
	}
	return db.collection(collectionName);
}

async function initConnection() {
	await MongoClient
		.connect(uri)
		.then(client => {
			db = client.db(database);
			console.log('Connected to Database');
			return db;
		})
		.catch(error => console.error(error));
}


// initialise database connection
initConnection();

// export required properties and functions
exports._db = db;
exports._MongoClient = MongoClient;
exports.getCollection = getCollection;