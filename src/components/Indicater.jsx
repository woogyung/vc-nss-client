import React from 'react';

export default class Indicater extends React.Component {
  render(){
    return(
      <div className="lds-css ng-scope">
        <div className="lds-spin">
          {new Array(8).fill(<div><div></div></div>)} 
        </div>
      </div>
    );
  }
}
