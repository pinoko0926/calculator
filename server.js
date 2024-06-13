const express = require('express')
const app = express()

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
  console.log("サーバー起動");
});

/**
 * バックエンドの実装
 */
// '/api/test' にアクセスがあれば、JSON 文字列 {"calcList": ["1+2=3"]}を返す
app.get('/api/test', (req, res)=> {
    res.json({ "calcList": ["1+2=3"]});
    res.end();
});
