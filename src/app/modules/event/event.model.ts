import { model, Schema } from "mongoose";
import { TEvent } from "./event.interface";

const eventSchema = new Schema<TEvent>(
    {
        _id: { type: String },
        title: { type: String, required: [true, "Title is required"] },
        date: { type: Date, required: [true, "Date is required"] },
        time: { type: String, required: [true, "Date is Required"] },
        notes: { type: String, },
        category: { type: String, },
        archived: { type: Boolean }
    },
    {
        timestamps: true
    }
)

export const Event = model<TEvent >("Event", eventSchema)