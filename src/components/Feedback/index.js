import './index.css'

const Feedback = props => {
  const {resourceEach, onEmojiClick} = props
  const {name, imageUrl} = resourceEach

  const onEmoji = () => {
    onEmojiClick()
  }

  return (
    <div className="each-emoji-div">
      <div className="emoji-name">
        <li>
          <button type="button" className="btn-decor">
            <img
              src={imageUrl}
              alt={name}
              className="img-decor"
              onClick={onEmoji}
            />
          </button>
          <p className="img-name">{name}</p>
        </li>
      </div>
    </div>
  )
}

export default Feedback
