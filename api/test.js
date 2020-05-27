const axios = require("axios");

export default async (req, res) => {
  try {
    const resp = await axios.get(
      "http://www.reddit.com/r/random/comments.json?limit=1"
    );
    const comment = resp.data.data.children[0].data.body;
    res.status(200).json(comment);
  } catch (error) {
    return res.status(400).json(error);
  }
};
