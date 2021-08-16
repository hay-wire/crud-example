const mongo = require('./connection');
const collectionName = 'users';
const { ObjectId } = require('mongodb');

exports.createUser = async (userObj) => {
	const UserColl = mongo.getCollection(collectionName);
	const user = await UserColl.insertOne(userObj);
	return user;
}

exports.getUsers = async () => {
	const UserColl = mongo.getCollection(collectionName);
	const users = await UserColl.find().toArray();
	return users;
}

exports.updateUser = async (userId, updateObj) => {
	const UserColl = mongo.getCollection(collectionName);
	console.log("Update user id is: ", userId);
	const updateResult = await UserColl.findOneAndUpdate(
		{_id: ObjectId(userId) }, 
		{
			$set: updateObj
		}, {
			returnDocument: 'after'
		});
	return updateResult;
}

exports.deleteUser = async (userId) => {
	const UserColl = mongo.getCollection(collectionName);
	const deleteResult = await UserColl.deleteOne({ _id: ObjectId(userId) });
	return deleteResult;
}
 