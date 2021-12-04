import React from "react"

const CardContext = React.createContext({});

export function CardProvider({ children }) {
    const [state, setState] = React.useState({});
    const value = { value: state, setValue: setState }

    return <CardContext.Provider value={value}>
        {children}
    </CardContext.Provider>
}

export function useCardContext() {
    return React.useContext(CardContext);
}