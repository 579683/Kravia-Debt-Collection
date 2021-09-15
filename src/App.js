import React, {useCallback, useContext, useEffect} from 'react'
import axios from 'axios'
import Creditors from './components/creditors';
import OverviewODCC from './components/overviewODCC'
import CaseStats from './components/caseStats';
import DetailsDCC from './components/detailsDCC';
import './App.css';
import { TodoContext } from './context';
import Querystring from 'query-string'

 function App() {

  // Verdier i fra context hooken
  const {accessToken, setAccessToken, setTable, setCredObject, setOverObject, setStatsObject, setDetailsObject, setCreditor, setOverview, setCaseStats, setDetails, setRequestError} = useContext(TodoContext);

  // Verdier som er lagret som 'environment variables'
  const {REACT_APP_GRANT_TYPE, REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_AUDIENCE, REACT_APP_SCOPE, REACT_APP_USERNAME, REACT_APP_PASSWORD} = process.env;

  const data = {
    grant_type: REACT_APP_GRANT_TYPE,
    client_id: REACT_APP_CLIENT_ID,
    client_secret: REACT_APP_CLIENT_SECRET,
    audience: REACT_APP_AUDIENCE,
    scope: REACT_APP_SCOPE,
    username: REACT_APP_USERNAME,
    password: REACT_APP_PASSWORD
  };

  //useEffekt-hook, som er brukt i den sammenhengen til å forhindre repeterende POST-requests
  useEffect(() => {
    axios.post('/oauth/token', Querystring.stringify(data))   
    .then(response => {
       setAccessToken(response.data.access_token);
     })   
    .catch((error) => {
       console.log('error ' + error);   
    });
  }, [])


  const url = 'https://api-staging.kraviainkasso.no'
  
  const authAxios = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  // Brukt for å hente verdiene i fra alle de relevante endepunktene 
  const fetchData = useCallback(async () => {
    try {
      const result = await authAxios.get(`/api/v2.0/creditor`);
      const result1 = await authAxios.get(`/api/v2.0/invoice/search/q`);
      const result2 = await authAxios.get(`/api/v2/statistic/creditor`);
      const result3 = await authAxios.get(`/api/v2.0/invoice/189503/details`);
      setTable(true)
      Object.values(result.data.value).map((val) => {
        setCreditor(Object.values(val));
        setCredObject(Object.keys(val));
      })
      Object.values(result1.data.data).map((el) => {
        setOverview(Object.values(el));
        setOverObject(Object.keys(el))
       }) 
      setCaseStats(result2.data);
      setStatsObject(result2.data);
      setDetails(result3.data.value); 
      setDetailsObject(result3.data.value);
    } catch(err) {
      setRequestError(err.message);
    }
  })

  // Funksjon, som er brukt å kunne gjemme tabellene med de ulike verdiene
  function clickTable() {
    setTable(false);
  }

  return (
    <div>
      <button onClick={() => fetchData()}>Show data</button>
      <button onClick={clickTable}>Hide data</button>
      <Creditors heading="Information about the creditor" /> 
      <OverviewODCC heading="Overview of ongoing debt collection case" />
       <CaseStats heading="Case statistics over time"/> 
      <DetailsDCC heading="Details about the debt collection case" /> 
    </div>
  );
  }
export default App;




