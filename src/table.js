 import React from 'react';
import axios from "axios";
import Axiostable from './axiostable'


class Table extends React.Component {
 
    constructor(props){
        super(props)
        this.state={
            emp:[]
        }
    }

    componentWillMount(){
        this.getTable()
    }


    getTable(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({emp: response.data.data})
                console.log(this.state.emp)
            }, (error)=>{
                console.log(error)
            })
    }

    renderTable=()=>{
        console.log('in renderTable')
        return (
                this.state.emp.map(axiostable=>{
                    return(
                        <Axiostable  
                            id={axiostable.id} 
                            employee_name={axiostable.employee_name}>
                        </Axiostable>)
                })
            )
    }

    render() { 
        return ( 
            <div>
                <h1>From rest api!!!!</h1>
                {this.renderTable()}
               
            </div>
         );
    }
}
 
export default Table;

