import React from 'react';
import Goat from '../Goat/goat';

class GoatCorral extends React.Component {
  render() {
    const myGoats = this.props.butts;

    const goatCards = myGoats.map((goat) => (<Goat key={goat.id} goat={goat}/>));

    return (
      <div className="goatCorral">
        {goatCards}
      </div>
    );
  }
}

export default GoatCorral;
