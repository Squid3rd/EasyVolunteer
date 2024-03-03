import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    user_img: String,
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    vol_hrs: Number,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
