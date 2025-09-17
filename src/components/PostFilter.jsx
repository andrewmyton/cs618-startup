import PropTypes from 'prop-types'
<<<<<<< HEAD
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
=======
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
>>>>>>> 84cbbf65 (chore: add TanStack)
    </div>
  )
}
PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
=======
>>>>>>> e8bf417e (chore: added UI)
=======
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
>>>>>>> 84cbbf65 (chore: add TanStack)
}
