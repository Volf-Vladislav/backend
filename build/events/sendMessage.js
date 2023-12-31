"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMessage = (msg, wss) => {
    var _a;
    const user = ((_a = msg.text) === null || _a === void 0 ? void 0 : _a.split(' ')) || ['no message'];
    const id = user[0];
    const message = user.map((element, index) => {
        if (index > 0)
            return element;
    }).join(' ');
    wss.clients.forEach((client) => {
        if (client.id === id) {
            client.send(JSON.stringify(message));
        }
    });
};
exports.default = sendMessage;
