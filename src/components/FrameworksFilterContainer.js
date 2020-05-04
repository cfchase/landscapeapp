import { connect } from 'react-redux';
import TreeSelector from './TreeSelector';
import { changeFilter } from '../reducers/mainReducer';
import { options } from '../types/fields';

const mapStateToProps = (state) => {
  const value = state.main.filters.frameworks_filter;
  const optionList = options('frameworks_filter');

  return {
    value: value,
    options: optionList
  };
};
const onChange = function(newValue) {
  return changeFilter('frameworks_filter', newValue);
};
const mapDispatchToProps = {
  onChange: onChange
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeSelector);
