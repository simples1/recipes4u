import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import myRouter from '../components/router';
import * as MyActions from '../actions/my_actions';

function mapStateToProps(state) {
  return {
    list_recipes: state.list_recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(myRouter);
