import TelegramBot from 'node-telegram-bot-api'
import Wss from '../types/Wss'

const sendMessage = (msg: TelegramBot.Message, wss: Wss) => {
    const user = msg.text?.split(' ') || ['no message']
    const id = user[0]
    const message = user.map((element:string, index:number) => {
        if(index > 0) return element
    }).join(' ')

    wss.clients.forEach((client:any) => {
        if (client.id === id) { 
            client.send(JSON.stringify(message))
        }
    })
}

export default sendMessage