import React, {useContext} from 'react'
import { TodoContext } from '../context'

// Viser til informasjon om kreditoren
function Creditors({heading}) {

    const {table, credObject, creditor, requestError} = useContext(TodoContext)

    return (
      <div> 
        <h2>{heading}</h2>

        <div className="creditors">
          {
            table ? (
              <table>
                <thead>
                  <tr>
                    {credObject.map((obj) => <th>{obj}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {creditor.map((cred) => <td>{cred}</td>)}
                  </tr>
                </tbody>
              </table>
            ) : <div></div>
          }   
        </div>
  
        {requestError && <p className="error" style={{color: 'red'}}>{requestError}</p>}
      </div>
    );
  }
  
  export default Creditors;