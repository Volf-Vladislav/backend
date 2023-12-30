import Ws from '../types/Ws'
import Message from '../types/Message'
import bot from '../services/tgBot'
import { chatID } from '../config/config'

const onMessageEvent = (message: any, ws: Ws) => {
    message = JSON.parse(message)
    ws.id = message.id
    bot.sendMessage(chatID, `${message.id}\n${message.message}`)
}

export default onMessageEvent