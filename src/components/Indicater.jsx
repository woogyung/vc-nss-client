import React from 'react';

export default class Indicater extends React.Component {
  render(){
    return(
      <div className="lds-css ng-scope">
        <div className="lds-spin">
          <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div>
      </div>
    );
  }

}