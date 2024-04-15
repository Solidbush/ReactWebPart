import {io, Socket} from "socket.io-client";
import toast from 'react-hot-toast';
const urlForApi = process.env.REACT_APP_API_URL;
const notify = (message) => toast(message);

class SocketApi {
    static socket= null;

    static createConnection() {
        this.socket = io(urlForApi);

        this.socket.on("connect", () => {
            notify("connected")
        })

        this.socket.on("disconnect", (e) => {
            notify(`disconnected ${e}`)
        })

        this.socket.on("newComment", (data) => {
            notify(`New comment: ${data}`)
        })
    }
}

export default SocketApi;