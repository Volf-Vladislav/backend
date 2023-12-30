import Ws from '../types/Ws'
import Wss from '../types/Wss'

const closeConnection = (wss: Wss, ws: Ws) => {
    wss.clients.forEach((client: any) => {
        if (client.id == ws.id) {
            ws.id = ''
        }
    })
}


export default closeConnection