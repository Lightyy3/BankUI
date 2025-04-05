import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {}

const EventSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  location: { type: String, required: true, unique: true },
  createdAt: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true, unique: true },
  startDateTime: { type: String, required: true, unique: true },
  endDateTime: { type: String, required: true, unique: true },
  price: { type: String, required: true, unique: true },
  isFree: { type: String, required: true, unique: true },
  url: { type: String, required: true, unique: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
