import PropTypes from 'prop-types'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 84cbbf65 (chore: add TanStack)
export function PostSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
<<<<<<< HEAD
  return (
    <div>
      <label htmlFor='sortBy'>Sort By: </label>
      <select
        name='sortBy'
        id='sortBy'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
=======
export function PostSorting({ fields = [] }) {
  return (
    <div>
      <label htmlFor='sortBy'>Sort By: </label>
      <select name='sortBy' id='sortBy'>
>>>>>>> e8bf417e (chore: added UI)
=======
  return (
    <div>
      <label htmlFor='sortBy'>Sort By: </label>
      <select
        name='sortBy'
        id='sortBy'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
>>>>>>> 84cbbf65 (chore: add TanStack)
        {fields.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
      {' / '}
      <label htmlFor='sortOrder'>Sort Order: </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 84cbbf65 (chore: add TanStack)
      <select
        name='sortOrder'
        id='sortOrder'
        value={orderValue}
        onChange={(e) => onOrderChange(e.target.value)}
      >
<<<<<<< HEAD
=======
      <select name='sortOrder' id='sortOrder'>
>>>>>>> e8bf417e (chore: added UI)
=======
>>>>>>> 84cbbf65 (chore: add TanStack)
        <option value={'ascending'}>ascending</option>
        <option value={'descending'}>descending</option>
      </select>
    </div>
  )
}
PostSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 84cbbf65 (chore: add TanStack)
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderValue: PropTypes.string.isRequired,
  onOrderChange: PropTypes.func.isRequired,
<<<<<<< HEAD
=======
>>>>>>> e8bf417e (chore: added UI)
=======
>>>>>>> 84cbbf65 (chore: add TanStack)
}
