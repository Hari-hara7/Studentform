import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  const { teacher, feedbackType, message } = req.body;
  const studentId = req.user.id;

  const feedback = new Feedback({ studentId, teacher, feedbackType, message });
  await feedback.save();

  res.status(201).json({ message: "Feedback submitted" });
};

export const getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find().populate("studentId", "name email");
  res.json(feedbacks);
};
