"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const tgBot_1 = __importDefault(require("./services/tgBot"));
const closeConnection_1 = __importDefault(require("./events/closeConnection"));
const onMessageEvent_1 = __importDefault(require("./events/onMessageEvent"));
const sendMessage_1 = __importDefault(require("./events/sendMessage"));
const port = 8000;
const wss = new ws_1.default.Server({ port: port }, () => {
    console.log('Server started on ' + port);
});
wss.on('connection', (ws) => {
    try {
        ws.on('message', message => {
            (0, onMessageEvent_1.default)(message, ws);
        });
        ws.on('close', () => {
            (0, closeConnection_1.default)(wss, ws);
        });
    }
    catch (error) {
        console.log(error);
    }
});
tgBot_1.default.on('message', msg => {
    (0, sendMessage_1.default)(msg, wss);
});
