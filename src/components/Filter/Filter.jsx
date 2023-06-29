import PropTypes from 'prop-types';

const Filter = () => {
  const handleFilterChange = event => {
    this.props.setFilter(event.target.value.toLowerCase());
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
