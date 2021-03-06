/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Web Interface
*  Dashboard page
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */

import React, { Fragment } from 'react';
import SummaryStats from '../components/SummaryStats';
import QueriesGraph from '../components/QueriesGraph';
import ClientsGraph from '../components/ClientsGraph';
import QueryTypesChart from "../components/QueryTypesChart";
import ForwardDestinationsChart from "../components/ForwardDestinationsChart";
import TopDomains from '../components/TopDomains';
import TopBlocked from '../components/TopBlocked';
import TopClients from '../components/TopClients';
import { api } from "../utils";

export default () => (
  <div className="animated fadeIn">
    <div className="row">
      <SummaryStats/>
    </div>
    <div className="row">
      <div className="col-md-12">
        <QueriesGraph/>
      </div>
    </div>
    {
      api.loggedIn ?
        <Fragment>
          <div className="row">
            <div className="col-md-12">
              <ClientsGraph/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <QueryTypesChart/>
            </div>
            <div className="col-md-6">
              <ForwardDestinationsChart/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <TopDomains/>
            </div>
            <div className="col-md-6 col-xl-4">
              <TopBlocked/>
            </div>
            <div className="col-md-6 col-xl-4">
              <TopClients/>
            </div>
          </div>
        </Fragment>
        : null
    }
  </div>
);
