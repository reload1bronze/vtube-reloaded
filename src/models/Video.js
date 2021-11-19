// 몽구스에게 데이터 구조를 알려줘야 함
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  fileUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, minLength: 20 },
  hashtags: [{ type: String, trim: true }],
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0, required: true },
    ratings: { type: Number, default: 0, required: true },
  },
});

videoSchema.static('formatHashtags', function(hashtags) {
  return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
});

// 비디오 모델 생성
const Video = mongoose.model("Video", videoSchema);
export default Video;
