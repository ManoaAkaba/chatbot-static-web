const fetch = require("node-fetch");

module.exports = async function (context, req) {
    const secret = process.env.1GEeeHu7eGiFP7dnb6k3CX869jqZx4t3UKA6fIHBQQlBYwqdIrwQJQQJ99BHAC77bzfAArohAAABAZBS2Cuu.DjJ7OgmfsetQjjvOjFvaiTEzpGs74Zaloh9asyp2dkSurs6DXiUGJQQJ99BIAC3pKaRAArohAAABAZBS4F58;

    const response = await fetch(
        "https://directline.botframework.com/v3/directline/tokens/generate",
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${secret}`,
                "Content-Type": "application/json",
            },
        }
    );

    const data = await response.json();
    context.res = {
        status: response.status,
        body: data
    };
};
