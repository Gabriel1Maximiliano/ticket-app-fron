import { createContext } from "react";




interface Context {
    socket:any;
    onLine:boolean;
}


export const SocketContext = createContext({ } as Context);