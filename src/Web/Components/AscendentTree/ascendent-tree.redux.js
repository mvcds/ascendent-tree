import { connect } from 'react-redux';

import AscendentTree from './index';

function mapStateToProps ({ ascendentTree }) {
  const length = ascendentTree.generation

  return {
    generations: Array.apply(null, { length })
  };
}

export default connect(
  mapStateToProps
)(AscendentTree);
