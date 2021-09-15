import React, { createContext, useState } from 'react'

const TodoContext = createContext()


// En komponent som sender globale og relevante variabler i gjennom applikasjonshierarkiet, og er klar til bruk for alle barnkomponentene. 
function TodoContextProvider({children}) {

    const [accessToken, setAccessToken] = useState([])
    const [table, setTable] = useState(false)
    
    
    const [credObject, setCredObject] = useState([]);
    const [overObject, setOverObject] = useState([]);
    const [statsObject, setStatsObject] = useState([]);
    const [detailsObject, setDetailsObject] = useState([]);
    
    const [creditor, setCreditor] = useState([]);
    const [overview, setOverview] = useState([]);
    const [caseStats, setCaseStats] = useState([]);
    const [details, setDetails] = useState([]);
    
    const [requestError, setRequestError] = useState([]);


    return (
        <TodoContext.Provider
            value={{
                accessToken,
                setAccessToken,
                table,
                setTable,
                credObject,
                setCredObject,
                overObject,
                setOverObject,
                statsObject,
                setStatsObject,
                detailsObject,
                setDetailsObject,
                creditor,
                setCreditor,
                overview,
                setOverview,
                caseStats,
                setCaseStats,
                details,
                setDetails,
                requestError,
                setRequestError
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContextProvider, TodoContext}