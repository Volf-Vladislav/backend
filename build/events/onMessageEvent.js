"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tgBot_1 = __importDefault(require("../services/tgBot"));
const config_1 = require("../config/config");
const onMessageEvent = (message, ws) => {
    message = JSON.parse(message);
    ws.id = message.id;
    tgBot_1.default.sendMessage(config_1.chatID, `${message.id}\n${message.message}`);
};
exports.default = onMessageEvent;
