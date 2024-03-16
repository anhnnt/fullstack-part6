/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux'
import { addVoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li style={{ marginBottom: 20 }}>
      {anecdote.content}
      <p>has {anecdote.votes}</p>
      <button onClick={handleClick}>VOTE</button>
    </li>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter}) => {
    let sorted = [...anecdotes].sort((a, b) => b.votes - a.votes)

    console.log('type of filter now', typeof filter)
    if (filter && typeof filter === 'string') {
      sorted = sorted.filter(anec =>
        anec.content.toLowerCase().includes(filter.toLowerCase()))
    }

    return sorted
  })

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(addVoteAnecdote(anecdote.id))
            dispatch(setNotification(`You voted ${anecdote.content}`, 5))
          }}
        />
        )}
    </ul>
  )
}

export default AnecdoteList