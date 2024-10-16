const upload = require("../middleware/multer");
const authMiddleware = require("../middleware/authMiddleware");
const Category = require("../models/category");
const User = require("../models/user");
const Podcast = require("../models/podcast");
const router = require("express").Router();

// add-podcast
router.post("/add-podcast", authMiddleware, upload, async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const frontImage = req.files["frontImage"][0].path;
    const audioFile = req.files["audioFile"][0].path;
    if (!title || !description || !category || !frontImage || !audioFile) {
      return res.status(400).json({ message: "All field are required" });
    }
    const { user } = req;
    const cat = await Category.findOne({ categoryName: category });
    if (!cat) {
      return res.status(400).json({ message: "No category found" });
    }
    const catid = cat._id;
    const userid = user._id;
    const newPodcast = new Podcast({
      title,
      description,
      category: cati,
      frontImage,
      audioFile,
      user: userid,
    });

    await newPodcast.save();
    await Category.findByIdAndUpdate(catid, {
      $push: { podcasts: newPodcast._id },
    });
    await User.findByIdAndUpdate(userid, {
      $push: { podcasts: newPodcast._id },
    });
    res.status(201).json({ message: "Podcast added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to add podcast" });
  }
});
module.exports = router;
