import React, {useContext} from 'react'
import { TodoContext } from '../context'

// Viser en oversikt over pågående innkassosaker
function OverviewODCC({heading}) {

    const {table, overview, overObject, requestError} = useContext(TodoContext)
    
    return (
      <div> 
        <h2>{heading}</h2>

        <div className="overview">
          {
            table ?
              <table>
                <thead>
                  <tr>
                    {overObject.map((ob) => <th>{ob}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {overview.map((ov) => <td>{ov}</td>)}
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
  
  export default OverviewODCC;