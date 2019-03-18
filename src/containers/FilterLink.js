import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapState = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
}

const FilterLink = connect(
  mapState,
  mapDispatch
)(Link);

export default FilterLink;