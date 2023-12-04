import {Component} from 'react'
import './index.css'

class EditText extends Component {
  state = {text: '', isEditable: true}

  enterText = event => {
    this.setState({text: event.target.value})
  }

  onChangeText = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <div className="app-container">
        <div className="div-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isEditable ? (
              <input
                className="input-box"
                type="text"
                onChange={this.enterText}
                value={text}
              />
            ) : (
              <p className="text">{text}</p>
            )}
            {isEditable ? (
              <button
                className="button"
                type="button"
                onClick={this.onChangeText}
              >
                Save
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={this.onChangeText}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditText
