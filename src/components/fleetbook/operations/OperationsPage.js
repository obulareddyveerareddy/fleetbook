import React        from 'react';
import BreadCrumb   from './../../common/BreadCrumb';
import './../FleetBookRouter.scss';

class OperationsPage extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('---------------------- componentWillMount  ------------------------');
    this.props.fetchOrgFleetOperations();
  }

  render(){
    let {user, dashboard, breadCrumbModal, operations, handleViewChange, fleetOperations} = this.props;
    console.log('----------------------------- >>> OperationsPage:render() <<< -----------------------------');
    console.log('fleetOperations Length === '+fleetOperations.length);
    console.log(fleetOperations);
    return(
      <div id="operations">
        <BreadCrumb breadCrumbModal={breadCrumbModal} />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card bg-default">
                <div className="card-body">
                  <div className="row m-3">
                    <div className="col-sm-8">
                      <h4 className="card-title">Fleet Operations</h4>
                    </div>
                    <div className="col-sm-4 pull-right row-group-without-space">
                      <div style={{display:'flex'}}>
                        <button type="submit" className="btn btn-primary mr-2">Add New Operation</button>
                        <select className="custom-select" defaultValue="0">
                          <option value="0">All</option>
                          <option value="1">Daily Service</option>
                          <option value="2">Hire Service</option>
                          <option value="3">Personal Service</option>
                          <option value="4">Tour Service</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <table className="table table-hover table-sm">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Reg</th>
                        <th>ShortName</th>
                        <th>Service</th>
                        <th>Capacity</th>
                        <th>Status</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                    {fleetOperations.map((item, index) => (
                       <tr key={index}>
                         <td>{item.id}</td>
                         <td>{item.category}</td>
                         <td><a href="#">{item.regNumber}</a></td>
                         <td>{item.shortName}</td>
                         <td>{item.service}</td>
                         <td>{item.seatCapacity}</td>
                         <td>{item.status}</td>
                         <td>{item.viewId}</td>
                       </tr>
                    ))}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OperationsPage;
