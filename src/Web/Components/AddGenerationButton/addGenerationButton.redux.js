import { connect } from 'react-redux';

import AddGenerationButton from './index';

function addGeneration (dispatch) {
  dispatch({ type: 'ADD_GENERATION' })
}

function mapStateToProps ({ ascendentTree }) {
  return {
    generation: ascendentTree.generation + 1
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onAddGeneration: addGeneration.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGenerationButton);
