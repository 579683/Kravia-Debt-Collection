import React, {useContext} from 'react'
import { TodoContext } from '../context'


// Viser til verdier som er detaljer om de ulike inkassosakene
function DetailsDCC({heading}) {

    const {table, detailsObject, requestError} = useContext(TodoContext)


    function getInvoiceHeaders() {
      return Object.keys(detailsObject["invoice"]).map(head => {
        return <th>{head}</th>
      })
    }
  
    function getInvoiceData() {
      return Object.keys(detailsObject["invoice"]).map(data => {
        return <td>{detailsObject["invoice"][data]}</td>
      })
    }

    function getCreditorHeaders() {
      return Object.keys(detailsObject["creditor"]).map(head => {
        return <th>{head}</th>
      })
    }
  
    function getCreditorData() {
      return Object.keys(detailsObject["creditor"]).map(data => {
        return <td>{detailsObject["creditor"][data]}</td>
      })
    }

    function getDebtorHeaders() {
      return Object.keys(detailsObject["debtor"]).map(head => {
        return <th>{head}</th>
      })
    }
  
    function getDebtorData() {
      return Object.keys(detailsObject["debtor"]).map(data => {
        return <td>{detailsObject["debtor"][data]}</td>
      })
    }

    function getSCHHeaders() {
      return Object.keys(detailsObject["statusCodeHistory"][0]).map(head => {
        return <th>{head}</th>
      })
    }
  
    function getSCHData() {
      return Object.keys(detailsObject["statusCodeHistory"][0]).map(data => {
        return <td>{detailsObject["statusCodeHistory"][0][data]}</td>
      })
    }

    function getAAHeaders() {
      return Object.keys(detailsObject["availableActions"]).map(head => {
        return <th>{head}</th>
      })
    }
  
    function getAAData() {
      return Object.keys(detailsObject["availableActions"]).map(data => {
        return <td>{detailsObject["availableActions"][data] ? 'True' : 'False'}</td>
      })
    }


    return (
      <div>
        <h2>{heading}</h2>

        <div className="details">
          {
            table ?
              <table>
                  <thead>
                    <h3>Invoice</h3>
                    <tr>
                      {getInvoiceHeaders()}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {getInvoiceData()}
                    </tr>
                  </tbody>
              </table>
            : <div></div>
            }
              
            {
            table ?
              <table>
                  <thead>
                    <h3>Creditor</h3>
                    <tr>
                      {getCreditorHeaders()}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {getCreditorData()}
                    </tr>
                  </tbody>
              </table>
            : <div></div>
            }

            {
            table ?
              <table>
                  <thead>
                  <h3>Debtor</h3>
                    <tr>
                      {getDebtorHeaders()}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {getDebtorData()}
                    </tr>
                  </tbody>
              </table>
            : <div></div>
            }

            {
             table ?
              <table>
                  <thead>
                    <h3>StatusCodeHistory</h3>
                    <tr>
                      {getSCHHeaders()}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {getSCHData()}
                    </tr>
                  </tbody>
              </table>
            : <div></div>
            }

            {
             table ?
              <table>
                  <thead>
                    <h3>Available actions</h3>
                    <tr>
                      {getAAHeaders()}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {getAAData()}
                    </tr>
                  </tbody>
              </table>
            : <div></div>
            }

            {
             table ?
              <table>
                  <thead>
                    <h3>Notifications</h3>
                    <tr>
                      <th>Type</th>
                      <th>Level</th>
                      <th>Primary target</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{detailsObject["notifications"][0].type}</td>
                      <td>{detailsObject["notifications"][0].level}</td>
                      <td>{detailsObject["notifications"][0].primaryTarget}</td>
                      <td>{detailsObject["notifications"][0].date}</td>
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
  
  export default DetailsDCC;