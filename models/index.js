import mongoose from 'mongoose';
import gradeModel from './gradeModel';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose);

export { db };
