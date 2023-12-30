import WebSocket from 'ws'

interface Ws extends WebSocket.WebSocket {
    id: string
    gender: string
    seekingGender: string
    status: string
    seekingID: string
}

export default Ws