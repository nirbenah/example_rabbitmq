import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { POST_COMMENT, POST_ORDER, } from './consts.js';
const COMMENT_URL = "http://localhost:5000";
const ORDER_URL = "http://localhost:7000";
dotenv.config();
const port = 3001;
const app = express();
// const corsOptions = {
//     origin: "http://localhost:5173",
//     credentials: true,
// };
// app.use(cors(corsOptions));
// Proxy middleware for login route
app.post(POST_COMMENT, createProxyMiddleware({
    target: COMMENT_URL,
    changeOrigin: true
}));
app.post(POST_ORDER, createProxyMiddleware({
    target: ORDER_URL,
    changeOrigin: true
}));
///////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Server running! port ${port}`);
});
app.use(express.json());
app.use(cookieParser());
// TODO: update permissions
//# sourceMappingURL=index.js.map