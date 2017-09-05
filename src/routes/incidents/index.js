import React, { Component } from 'react';
import XMLParser from 'react-xml-parser';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Incident extends Component {
  state = { incidents: [{
    title: 'QUEENSCLIFF, WHARF ST',
    agency: 'CFA',
    fireDistrict: 'Central',
    incidentNo: '1646192',
    date: '05/09/2017 10:26:00',
    type: 'STRUCTURE',
    location: 'QUEENSCLIFF',
    status: 'Responding',
    size: 'SMALL'
  },
  {
    title: 'SPRINGVALE SOUTH, PATERSON RD',
    agency: 'CFA',
    fireDistrict: 'Central',
    incidentNo: '1646191',
    date: '05/09/2017 10:19:00',
    type: 'ASSIST OTHER AGENCY',
    location: 'SPRINGVALE SOUTH',
    status: 'Responding',
    size: 'SMALL'
  },
  {
    title: 'CHELTENHAM, JACK RD',
    agency: 'MFB',
    fireDistrict: 'Central',
    incidentNo: '170902024',
    date: '05/09/2017 10:28:28',
    type: 'Hazardous Incident',
    location: 'CHELTENHAM',
    status: 'Under Control',
    size: 'SMALL'
  }]
}

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn selectable={false}>Title</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Agency</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Fire District</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Incident No</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Date</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Type</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Location</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Status</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Size</TableHeaderColumn>
            <TableHeaderColumn selectable={false}>Vehicles</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.state.incidents.map((incident) => (
            <TableRow>
              <TableRowColumn selectable={false}>{ incident.title }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.agency }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.fireDistrict }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.incidentNo }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.date }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.type }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.location }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.status }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.size }</TableRowColumn>
              <TableRowColumn selectable={false}>{ incident.vehicles }</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default Incident;