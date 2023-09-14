const express = require("express");
const axios = require("axios");
require("dotenv").config();
var cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
//joke
app.get("/joke", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    console.log(process.env.OPENAI)
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: `Tell a joke about ${keyword}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI} `,
          "Content-Type": "application/json",
        },
      }
    );

    const joke = response.data.choices[0].text.trim();
    res.json({ joke });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({ error: "Something went wrong" });
  }
});
//shayari
app.get("/shayari", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: `Tell a joke about ${keyword}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY} `,
          "Content-Type": "application/json",
        },
      }
    );

    const joke = response.data.choices[0].text.trim();
    res.json({ joke });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({ error: "Something went wrong" });
  }
});
//story
app.get("/story", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: `Tell a joke about ${keyword}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${"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"} `,
          "Content-Type": "application/json",
        },
      }
    );

    const joke = response.data.choices[0].text.trim();
    res.json({ joke });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({ error: "Something went wrong" });
  }
});
//qoute
app.get("/quote", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: `Tell a joke about ${keyword}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${"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"} `,
          "Content-Type": "application/json",
        },
      }
    );

    const joke = response.data.choices[0].text.trim();
    res.json({ joke });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({ error: "Something went wrong" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
