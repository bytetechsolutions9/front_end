import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class addEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            //step 2
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''

        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    }
//step 3
    componentDidMount(){
        //step4

        if(this.state.id==-1){
            return
        }
        else{
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName:employee.firstName,
                lastName: employee.lastName,
                 emailId:employee.emailId
             });

        });
    }

    }

    saveEmployee=(e)=>{
        e.preventDefault();

        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log('employee=> ' + JSON.stringify(employee));

        //step 5

        if(this.state.id==-1){
            EmployeeService.addEmployee(employee).then(res=>{
                this.props.history.push('/employees');
            });
            
        }
        else{
            EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
                this.props.history.push('/employees');
    
            });
        }

        
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});
    }
    
    changeEmailHandler=(event)=>{
        this.setState({emailId:event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
    }

    cancle(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                     
                                    <div className="form-group">
                                        <label>Email Id: </label>
                                        <input placeholder="Email Id" name="emailId" className="form-control"
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft:"20px"}}>Cancle</button>
                                     
                                </form>
                            </div>

                        </div>

                    </div>
                    

                </div>
            </div>
        );
    }
}

export default addEmployeeComponent;