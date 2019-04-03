import PropTypes from 'prop-types';

export default {
  formGroupShape: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    renderGroup: PropTypes.func,
  })),
};
