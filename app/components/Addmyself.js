import React from 'react';
import AddmyselfStore from '../stores/AddmyselfStore';
import AddmyselfActions from '../actions/AddmyselfActions';

class Addmyself extends React.Component {
  constructor(props){
    super(props);
    this.state = AddmyselfStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddmyselfStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddmyselfStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
 
  render() {
      return(
        <div className="arrow_box">
          <div id="meet_text">{this.state.myselftext}</div>
        </div>
      )
  }
}

export default Addmyself;
