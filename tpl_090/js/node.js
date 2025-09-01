const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const DIRECT_LINE_SECRET = "1GEeeHu7eGiFP7dnb6k3CX869jqZx4t3UKA6fIHBQQlBYwqdIrwQJQQJ99BHAC77bzfAArohAAABAZBS2Cuu.DjJ7OgmfsetQjjvOjFvaiTEzpGs74Zaloh9asyp2dkSurs6DXiUGJQQJ99BIAC3pKaRAArohAAABAZBS4F58";

app.get('/generateToken', async (req, res) => {
  try {
    const response = await axios.post(
      'https://directline.botframework.com/v3/directline/tokens/generate',
      {},
      {
        headers: {
          Authorization: `Bearer ${DIRECT_LINE_SECRET}`
        }
      }
    );
    res.json({ token: response.data.token });
  } catch (error) {
    res.status(500).send("トークン生成失敗");
  }
});

app.listen(port, () => {
  console.log(`Token server listening at http://localhost:${port}`);
});
