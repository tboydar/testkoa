const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = Router();

// 設定根路徑的處理函數
router.get('/', async function(ctx) {
    ctx.body = 'Hello World / ';
});

router.get('/api/user', async function(ctx) {

    // 檢查 Token，若有問題回傳 400 HTTP StatusCode
    if (ctx.query.token == '123')
        ctx.throw(400);

    // 若已經拋出 400 的狀態，接下來的程式不會被執行
    ctx.body = 'Hello World ' + '/api/user';
});

app.use(router.routes());

app.listen(3000);