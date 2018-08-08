import { Document, Model, Schema } from "mongoose";
import * as mongoose from "mongoose";
import { IDog } from "../interfaces/dog";

export interface IDogModel extends IDog, Document {
    url: string;
}

export const dogSchema: Schema = new Schema({
    url: String,
});

export const Dog: Model<IDogModel> = mongoose.model<IDogModel>("Dog", dogSchema);
