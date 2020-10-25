import React from 'react';

class C extends React.Component {
  componentDidMount() {
    this.props.showRandomNumber(Math.random())
  }

  render () {
    return (
      <div></div>
    )
  }
 
}

export default C;