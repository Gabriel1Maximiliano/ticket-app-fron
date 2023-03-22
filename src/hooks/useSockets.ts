import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";





export const useSockets = (   serverPath:any  ) => {

    const socket = useMemo(() =>io(serverPath, {transports: ["websocket","polling","flashsocket"],}) , [serverPath]); 
    const [onLine, setOnLine] = useState<boolean>(false);
    useEffect(() => {
    
        setOnLine(socket.connected);
      }, [socket]);
    
      useEffect(() => {
        socket.on("connect", () => {
          setOnLine(true);
        });
      }, [socket]);
    
      useEffect(() => {
        socket.on("disconnect", () => {
          setOnLine(false);
        });
      }, [socket]);
      return {
        socket,
        onLine,
      }
}