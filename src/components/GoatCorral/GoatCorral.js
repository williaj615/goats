import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.butts;
    const { freeGoat } = this.props;

    const goatCards = myGoats.map((goat) => (<Goat key={goat.id} goat={goat} freeGoat={freeGoat}/>));

    return (
      <div className="goatCorral">
        {goatCards}
      </div>
    );
  }
}

export default GoatCorral;
