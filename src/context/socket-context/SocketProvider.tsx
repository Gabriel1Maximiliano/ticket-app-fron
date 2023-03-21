import { useSockets } from "../../hooks/useSockets";
import { SocketContext } from "./SocketContext";



const serverPath =import.meta.env.VITE_REACT_APP_URL_API


export const SocketProvider = ({ children }: any) => {

  const { socket, onLine } = useSockets({ serverPath });
  return (
    <SocketContext.Provider value={{ socket, onLine }}>
      {children}
    </SocketContext.Provider>
  );
};
