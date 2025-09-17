import PropTypes from 'prop-types'
<<<<<<< HEAD
export function PostFilter({ field, value, onChange }) {
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}: </label>
      <input
        type='text'
        name={`filter-${field}`}
        id={`filter-${field}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
=======
export function PostFilter({ field }) {
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}: </label>
      <input type='text' name={`filter-${field}`} id={`filter-${field}`} />
>>>>>>> e8bf417e (chore: added UI)
    </div>
  )
}
PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
<<<<<<< HEAD
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
=======
>>>>>>> e8bf417e (chore: added UI)
}
