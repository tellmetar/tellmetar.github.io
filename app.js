'use strict'


const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();


const app = new Koa();

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

app.use(bodyParser());

// add router middleware:
app.use(router.routes());