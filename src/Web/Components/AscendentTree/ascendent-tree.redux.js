import { connect } from 'react-redux';

import AscendentTree from './index';

function mapStateToProps ({ ascendentTree }) {
  return {
    generations: ascendentTree.generation
  };
}

export default connect(
  mapStateToProps
)(AscendentTree);
