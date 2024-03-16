import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    console.log('structure of event', event)
    const filterValue = event.target.value
    dispatch(filterChange(filterValue))
  }

  return (
    <div>
      Filter
      <input
        type="text"
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter