import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
/**/
import {toggleCheck, incNumber, decNumber} from '../actions';
import { Checkbox } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    const props = this.props;
    const {checked, value} = props;
    return (
      <div>
        {/**/}
        <h1>Hello <a href={'https://github.com/electrode-io'}>{'Electrode'}</a></h1>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <Checkbox>
              Checkbox
            </Checkbox>
          </label>
          <div>
            <Button bsStyle='danger' onClick={props.onDecrease}>-</Button>
            &nbsp;{value}&nbsp;
            <Button bsStyle='success' onClick={props.onDecrease}>+</Button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
