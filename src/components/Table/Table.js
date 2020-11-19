import React, { Component } from "react";


class Table extends Component {
      state= {
        search: "",
        employees: []
      }

      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(emps => this.setState({employees: emps}));
      }

      handleSearch = event => {
        let value = event.target.value;
        const name = event.target.name;
        
        this.setState(
          {
            [name]: value,
          }
        );
      }

      sortNames = () => {
        const sortedEmployees = this.state.employees.sort((a,b)=>  a.name > b.name ? 1 : -1 );
        this.setState(sortedEmployees);
      }

      sortID = () => {
        const sortedEmployees = this.state.employees.sort((a,b)=>  a.id > b.id ? 1 : -1 );
        this.setState(sortedEmployees);
      }

      sortEmail = () => {
        const sortedEmployees = this.state.employees.sort((a,b)=>  a.email > b.email ? 1 : -1 );
        this.setState(sortedEmployees);
      }

      sortPhone = () => {
        const sortedEmployees = this.state.employees.sort((a,b)=>  a.phone > b.phone ? 1 : -1 );
        this.setState(sortedEmployees);
      }


      render(){
          return (
            <>
            <div className="input-group mx-auto">
                <input onChange={this.handleSearch} name="search" value={this.state.search} type="text" className="form-control" placeholder="Search by name/email/phone" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="table-responsive-md">
                <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"><button className="btn btn-primary" onClick={this.sortID}>#</button></th>
                            <th scope="col"><button className="btn btn-primary" onClick={this.sortNames}>Name</button></th>
                            <th scope="col"><button className="btn btn-primary" onClick={this.sortEmail}>email</button></th>
                            <th scope="col"><button className="btn btn-primary" onClick={this.sortPhone}>Phone</button></th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.employees.filter(
                                emp => (
                                  emp.name.toLowerCase().includes(this.state.search.toLowerCase())
                                  ||
                                  emp.email.toLowerCase().includes(this.state.search.toLowerCase())
                                  ||
                                  emp.phone.includes(this.state.search)
                                )
                        ).map(emp => (
                              <tr key={emp.id}>
                                <th scope="row">{emp.id}</th>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.phone}</td>
                              </tr>
                        ))
                        } 
                        </tbody>
                </table>
            </div>
            </>
          );
      }
}

export default Table;