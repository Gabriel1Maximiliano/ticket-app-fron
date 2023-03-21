import { useContext, useEffect } from 'react';
import { UIContext } from '../context/UIContext';

interface HookProps {
    hide:boolean;
}
export const useHideMenu = ( { hide }:HookProps ) => {

    const { handleShowMenu,handleHideMenu } = useContext( UIContext )

    useEffect(()=>{

        if( hide ){
            handleHideMenu();
        }else{
            handleShowMenu();
        }

    },[ hide ])
  
}
