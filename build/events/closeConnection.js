"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const closeConnection = (wss, ws) => {
    wss.clients.forEach((client) => {
        if (client.id == ws.id) {
            ws.id = '';
        }
    });
};
exports.default = closeConnection;
