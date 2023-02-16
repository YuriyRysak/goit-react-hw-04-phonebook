import PropTypes from 'prop-types';
// import './Filter.module.css';


export const Filter = ({filter, onChangeFilter}) => (

  <label>
  Find contacts by name
  <input
    type="text"
    name='filter'
    value={filter}
    onChange={onChangeFilter}
    placeholder="Find contacts by name"
  />
</label>
    
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};