const msalConfig = {
  auth: {
    clientId: "62969bf9-7b1e-4fc9-9611-d6ff4ec3fa8d", // ステップ2で取得したID
    authority: "https://login.microsoftonline.com/854e66f7-9445-4507-9a24-7c9bd635548a", // ステップ1で取得したテナントID
    redirectUri: "https://white-stone-050ef6400.2.azurestaticapps.net/"
  }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

document.getElementById("loginBtn").addEventListener("click", () => {
  msalInstance.loginPopup({
    scopes: ["openid", "profile", "email"]
  }).then(response => {
    const accessToken = response.accessToken;
    console.log("Access Token:", accessToken);

    // ここでチャットボットを初期化する（bot.jsなどに分けてもOK）
    initializeBot(accessToken);
  }).catch(error => {
    console.error("ログイン失敗:", error);
  });
});
