import { useSockets } from "../../hooks/useSockets";
import { SocketContext } from "./SocketContext";


interface SocketContextProps {

  children:JSX.Element | JSX.Element[];
  
}

//const serverPath =import.meta.env.VITE_REACT_APP_URL_API
const serverPath =import.meta.env.VITE_REACT_APP_URL_API


export const SocketProvider = ({ children }: SocketContextProps) => {

  const { socket, onLine } = useSockets(serverPath );
  
  
  return (
    <SocketContext.Provider value={{ socket, onLine }}>
      {children}
    </SocketContext.Provider>
   );
};
