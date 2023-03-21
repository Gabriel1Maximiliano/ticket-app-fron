import { createContext, useState } from "react"

interface Context {

    
    hideMenu:boolean;
    handleHideMenu:() => void;
    handleShowMenu:() => void;

}

interface UIContextProps {

    children:JSX.Element | JSX.Element[];
    
}
export const UIContext = createContext({} as Context )

export const UIProvider = ({ children } : UIContextProps) => {

     const [ hideMenu, setHideMenu ] = useState<boolean>(false);

     const handleShowMenu = () =>{
        setHideMenu( false );
     }
     const handleHideMenu = ():void =>{
        setHideMenu( true );
     }

  return (
    <UIContext.Provider value={{
        hideMenu,
        handleHideMenu,
        handleShowMenu,
    }} >
         {children}
    </UIContext.Provider>
  )
}
