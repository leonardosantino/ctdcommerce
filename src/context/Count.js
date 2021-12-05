import { createContext, useContext, useState } from "react";

const CountContext = createContext();



export default function CountProvider({children}) {

    const [count, setCount] = useState(0);

    return(

        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>

    );
}

export  function UseCount() {

    const context = useContext(CountContext)
    const {count, setCount} = context;

    return {count, setCount}
    
}