import React from 'react';
import ReactDOM from 'react-dom';
import * as WebConstants from './web-constants.js';

export class SynapseHeader extends React.Component {
  render() {
    return (
      <div className="row notopmargin synapse-blue-bg" style={{paddingTop: '16px'}}>
        <div className="col-xs-12">
          <div className="margin-left-15 displayInline">
            <img src="http://s3.amazonaws.com/static.synapse.org/images/SynapseLogo.png"
              width="80" height="76" className="imageButton margin-right-5 margin-bottom-40" style={{width: '66px', height: '66px'}}></img>
            <h2 className="displayInline color-white">
              <a href="#" className="color-white textDecorationNone font-size-67">Synapse</a>
            </h2>
          </div>
          <span className="right" style={{marginTop: '28px'}}>
            <div className="btn-group margin-left-5 margin-right-5 margin-top-5 pull-right" data-original-title=""
              title="">
            </div>
            <div className="right margin-left-5 margin-right-5 margin-top-5" aria-hidden="true" style={{display: 'none'}}>
              <button type="button" className="btn btn-default btn-xs" style={{height: '28px'}}>Sign in</button>
            </div>
            <div className="right margin-left-5 margin-right-5 margin-top-5" aria-hidden="true" style={{display: 'none'}}>
              <button type="button" className="btn btn-default btn-xs" style={{height: '28px'}}>Register</button>
            </div>
            <div className="right margin-left-5 margin-right-5 margin-top-5">
            </div>
            <div className="right margin-left-5 margin-right-5 margin-top-5 margin-bottom-20">
              <div className="searchBox displayInlineTable">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder=" Search" style={{height: '28px'}}></input>
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-default" style={{height: '28px'}}>
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
