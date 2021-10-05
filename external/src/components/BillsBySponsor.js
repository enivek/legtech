import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

export class BillsBySponsor extends Component {
    
  static displayName = BillsBySponsor.name;
      
  constructor(props) {
    super(props);
  }
  
  onSubmit = () => {
    this.props.history.push({
      pathname: '/counter',
      search: '?query=abc',
      state: { currentCount: 1234 }
    })
  }

  render() {

    return (
        <main role="main" class="container-fluid col" name="mainContent">
                        
            <h1>Detailed Legislative Reports - Bills By Sponsor</h1>

            <div id="safariCacheFixContent" >
                <div class="row" id="formContent">
                    <div class="col-6 col-lg-4 col-xl-2">
                        <div class="form-group">
                            <label>Biennium</label>                                                
                            <Form.Control as="select">
                              <option>2021-20</option>
                              <option value="1">2020-19</option>
                              <option value="2">2019-18</option>
                              <option value="3">2018-17</option>
                            </Form.Control>                        
                        </div>
                    </div>
                    <div class="col-12 mb-3">

                        <fieldset class="form-group">
                            <legend>Select Sponsor Type</legend>
                            <Form.Check inline label="House" name="sponsorType" type="radio" value="house" id="sponsorTypeHouse"/>
                            <Form.Check inline label="Senate" name="sponsorType" type="radio" value="senate" id="sponsorTypeSenate"/>
                            <Form.Check inline label="Committee" name="sponsorType" type="radio" value="committee" id="sponsorTypeCommittee"/>           
                            <Form.Check inline label="Requester" name="sponsorType" type="radio" value="requester" id="sponsorTypeRequester"/>                                       
                        </fieldset>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-3 mb-2">
                        <div class="form-group" id="sponsorsList">
                            <div id="sponsorTypeHouseChoices">
                                <label>Type or Select a Sponsor:</label>
                                <Form.Control as="select">
                                  <option>Select a sponsor</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Control>                                    
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-2">
                        <fieldset class="form-group">
                            <legend>Select a Report Type</legend>
                            <Form.Check inline label="Primary Bills" name="reportType" type="radio" value="primarybills" id="optReportTypePrimaryBills"/>
                            <Form.Check inline label="Secondary Bills" name="reportType" type="radio" value="secondarybills" id="optReportTypeSecondaryBills"/>
                            <Form.Check inline label="All Bills" name="reportType" type="radio" value="allbills" id="optReportTypeAllBills"/>                            
                        </fieldset>
                    </div>
                    <div class="col-12 mb-4">
                        <Form.Check inline label="Show only those bills by the selected sponsor that have companion bills." name="hasCompanionBills" type="checkbox" value="true" id="hasCompanionBills"/>
                    </div>
                    <div class="col-12 mb-5">
                        <button type="button" class="btn btn-primary" id="submit" onClick={this.onSubmit}>Find Bills By Sponsor</button>
                    </div>
                </div>
            </div>
        </main>
    );
  }
}
