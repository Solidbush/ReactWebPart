import {useEffect} from "react";
import SocketApi from "../api/socketApi";


export const useConnectSocket = () => {
    const connectSocket = () => {
        SocketApi.createConnection();
    }
    useEffect(() => {
        connectSocket();
        SocketApi.socket.emit('joinRoom', 'commentRoom');
    }, [])
}
