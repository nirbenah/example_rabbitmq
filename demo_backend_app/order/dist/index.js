"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_js_1 = require("./routes.js");
const consts_js_1 = require("./consts.js");
dotenv_1.default.config();
// try{
//     // Connect to mongoDB
//     //const dbURI = `mongodb+srv://admin:${process.env.DBPASS}@cluster0.vpn2j6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//     const dbURI = `mongodb+srv://nir:tMHPJOL68p3SQVGD@cluster0.vpn2j6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//     await mongoose.connect(dbURI);
//     console.log("Connectedddd")
// /* ========== */
// }catch(error){
//     console.log("didnt connect", error)
// }
const port = 7000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// const corsOptions = {
//     origin: frontendURL,
//     credentials: true,
//   };
// app.use(cors(corsOptions));
app.post('/', (req, res) => {
    console.log("Hello");
    res.send('Hello World!!!');
});
app.post(consts_js_1.POST_ORDER, routes_js_1.postOrdersRoute);
app.listen(port, () => {
    console.log(`Server running! port ${port}`);
});
// TODO: update permissions
//# sourceMappingURL=index.js.map