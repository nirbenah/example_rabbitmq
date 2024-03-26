"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrdersRoute = void 0;
const utils_js_1 = require("./utils.js");
const postOrdersRoute = async (req, res) => {
    try {
        await (0, utils_js_1.produceMessage)("to_comment", "FORTH MESSAGE");
    }
    catch (e) {
        console.log(e, "ERROR");
    }
    res.status(201).send('Orderrr created');
};
exports.postOrdersRoute = postOrdersRoute;
//# sourceMappingURL=routes.js.map