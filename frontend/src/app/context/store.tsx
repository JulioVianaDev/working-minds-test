
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import { USER_LIST_TYPE } from "./typesPages";
import { NEW_VACANTY_TYPE, VACANTY_LIST_TYPE } from "./typesVacantis";

export interface User {
    _id: string,
    name: string,
    hiring: string,
    days: number,
    imageUrl: string,
    createdAt: string,
    __v: number,
    image: string | File
  }

interface ContextProps {
    textNavTop: string,
    setTextNavTop: Dispatch<SetStateAction<string>>,
    setAtualPage: Dispatch<SetStateAction<string>>,
    setDashboardPage: Dispatch<SetStateAction<string>> ,
    dashboardAtualPage: string,
    users: User[],
    setUsers: Dispatch<SetStateAction<User[]>>,
    atualPage: string,
    atualUserEditing: User,
    isEditing: boolean,
    setIsEditing: Dispatch<SetStateAction<boolean>>,
    setAtualUserEditin: Dispatch<SetStateAction<User>>,
}

const GlobalContext = createContext<ContextProps>({
    textNavTop: '',
    setTextNavTop: (): string => '',
    users: [],
    setUsers: (): User[] => [] ,
    atualPage: USER_LIST_TYPE,
    setDashboardPage:  (): string => '' ,
    dashboardAtualPage: VACANTY_LIST_TYPE,
    setAtualPage: (): string => '',
    isEditing: false,
    setIsEditing: ()=>{},
    atualUserEditing: {_id: '',name: '',hiring: '',days:0,image: '', createdAt: '',  __v: 0,imageUrl: '',},
    setAtualUserEditin: ()=>{},
})

export const GlobalContextProvider = ({ children }:any) => {
    const [textNavTop, setTextNavTop] = useState('User List');
    const [atualPage, setAtualPage] = useState(USER_LIST_TYPE);
    const [dashboardAtualPage, setDashboardPage] = useState(VACANTY_LIST_TYPE);
    const [users, setUsers] = useState<[] | User[]>([]);
    const [isEditing,setIsEditing] = useState(false)
    
    const [atualUserEditing,setAtualUserEditin] = useState<User>({_id: '',name: '',hiring: '',days:0,image: '', createdAt: '',  __v: 0,imageUrl: '',})
    return (
        <GlobalContext.Provider value={{dashboardAtualPage, setDashboardPage ,textNavTop, setTextNavTop, users, setUsers,atualPage, setAtualPage,atualUserEditing,setAtualUserEditin,isEditing,setIsEditing }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);