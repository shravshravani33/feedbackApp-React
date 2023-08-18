import {Component} from 'react'

import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {feedback: true}

  onEmojiClick = () => {
    this.setState({feedback: false})
  }

  onFeedbackPage = () => {
    const {emojis} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <div className="each-emoji">
          <ul className="each-emoji">
            {emojis.map(each => (
              <Feedback
                resourceEach={each}
                key={each.id}
                onEmojiClick={this.onEmojiClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  onThankyouPage = () => {
    const {loveEmojiUrl} = resources
    console.log(loveEmojiUrl)

    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" className="love-decor" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {feedback} = this.state
    return (
      <div className="main-div">
        <div className="inner-div">
          {feedback ? this.onFeedbackPage() : this.onThankyouPage()}
        </div>
      </div>
    )
  }
}

export default App
