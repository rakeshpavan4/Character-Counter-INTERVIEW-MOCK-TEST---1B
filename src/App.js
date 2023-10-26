import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {words: [], userInput: ''}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userInput, words} = this.state
    const userInputs = {
      id: v4(),
      words: userInput,
    }
    const updatedList = [...words, userInputs]
    this.setState({words: updatedList})
    this.setState({userInput: ''})
  }

  renderEmptyview = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        className="no-user-input-image"
        alt="no user inputs"
      />
    </div>
  )

  renderleftside = () => {
    const {words} = this.state
    const wordslength = words.length
    return (
      <div className="leftside">
        <div>
          <h1>Count the characters like a Boss</h1>
        </div>
        {wordslength === 0 ? (
          this.renderEmptyview()
        ) : (
          <ul className="list">
            {words.map(eachword => (
              <li key={eachword.id}>
                <p>
                  {eachword.words}:<span>{eachword.words.length}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  renderrightside = () => {
    const {userInput} = this.state
    return (
      <div className="rightside">
        <div>
          <h1>Character Counter</h1>
          <form onSubmit={this.onSubmitForm} className="form">
            <input
              type="text"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="character-counter-container">
        <div className="container">
          {this.renderleftside()}
          {this.renderrightside()}
        </div>
      </div>
    )
  }
}

export default App
