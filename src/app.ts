import WebSocket from 'ws'

import Ws from './types/Ws'
import bot from './services/tgBot'

import closeConnection from './events/closeConnection'
import messageEvent from './events/onMessageEvent'
import sendMessage from './events/sendMessage'

const port: number = 8000

const wss = new WebSocket.Server({ port: port }, () => {
    console.log('Server started on ' + port)
})

wss.on('connection', (ws: Ws) => {
    try {
        ws.on('message', message => {
            messageEvent(message, ws)
        })

        ws.on('close', () => {
            closeConnection(wss, ws)
        })
    }
    catch (error) {
        console.log(error)
    }
})

bot.on('message', msg => {
    sendMessage(msg, wss)
})