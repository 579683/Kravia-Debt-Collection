import React, {useContext} from 'react'
import { TodoContext } from '../context'


// Vise til statistikker til de ulike inkassosakene som blir vist over tid
function CaseStats({heading}) {

    const {table, statsObject, requestError} = useContext(TodoContext)

  function getHeaders() {
    return Object.keys(statsObject).map(head => {
      return <th>{head}</th>
    })
  }

  function getData() {
    return Object.keys(statsObject).map(data => {
      return <td>{statsObject[data]}</td>
    })
  }

    return (
      <div> 
        <h2>{heading}</h2>
   
        <div className="caseStats">
        {
          table ?
            <table>
              <thead>
                  <tr>
                    {getHeaders()}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {getData()}
                  </tr>
                </tbody>
            </table>
            : <div></div>
        }
        </div>
  
        {requestError && <p className="error" style={{color: 'red'}}>{requestError}</p>}
      </div>
    );
  }
  
  export default CaseStats;