import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(
    props.anecdotes.map((anecdote, id) => ({ id, text: anecdote, votes: 0}))
  );

  const randomNumberMaxExclusive = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const handleNext = () => {
    const nextIndex = randomNumberMaxExclusive(0, anecdotes.length)
    if (nextIndex === selected) {
      // Do not show the same anecdote
      return handleNext();
    }
    setSelected(nextIndex)
  }

  const handleVote = (id) => {
    const iterator = (anecdote) => {
      if (anecdote.id === id) {
        return {
          ...anecdote,
          votes: anecdote.votes + 1
        }
      }
      return anecdote;
    }

    setAnecdotes(anecdotes.map(iterator));
  }

  const mostVoted = () => {
    let mostVoted = anecdotes[0];
    anecdotes.forEach(anecdote => {
      if (anecdote.votes > mostVoted.votes) {
        mostVoted = anecdote;
      }
    })
    return mostVoted;
  }

  const mostVotedAnecdote = mostVoted();

  return (
    <div>
      <p>
        {anecdotes[selected].text}
      </p>
      <p>
        has {anecdotes[selected].votes} votes
      </p>
      <button onClick={() => handleVote(anecdotes[selected].id)}>Vote</button>
      <button onClick={handleNext}>Next anectode</button>
      <h2>Anecdote with the most votes</h2>
      <p>
        {mostVotedAnecdote.text}
      </p>
      <p>
        has {mostVotedAnecdote.votes} votes
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
