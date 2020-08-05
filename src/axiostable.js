import React, { Component } from 'react'
class Axiostable extends React.Component {
    state = {  }

    render() { 
        return (
            <table>
                 <tr>
                   <th>ID</th>
                   <th>Name</th>
                   
                 </tr>
                
                   <tr>
                     <td>{this.props.id}</td>
                     <td>{this.props.employee_name}</td>
                     </tr>
                 </table>
          );
    }
}
 
export default Axiostable