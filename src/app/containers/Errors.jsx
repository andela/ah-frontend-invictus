import React, { Component } from 'react';

export default class Errors extends Component {
  constructor (props) {
    super(props);
    this.state = { errors: [] };
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: this.mapErrorsToList(nextProps)
      });
    }
  }
   mapErrorsToList = props => {
     let items = [];
     if (Array.isArray(props.errors)) {
       for (let i = 0; i < props.errors.length; i++) {
         items.push(props.errors[i]);
       }
     } else {
       Object.keys(props.errors).forEach(key => {
         for (let i = 0; i < props.errors[key].length; i++) {
           items.push(key + ': ' + props.errors[key][i]);
         }
       });
     }
     return items;
   }
   render () {
     function Repeat (props) {
       let items = [];
       for (let i = 0; i < props.errors.length; i++) {
         items.push(props.children(i, props.errors[i]));
       }
       return <div className="danger" ><ul>{items}</ul></div>;
     }
     return (
       this.state.errors.length ? (
         <Repeat errors={this.state.errors}>
           {(index, message) => <li key={index}>{message}</li>}
         </Repeat>
       ) : (null)
     );
   }
}
