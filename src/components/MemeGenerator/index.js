import {Component} from 'react'
import {
  MemeGeneratorOverallContainer,
  MemeGeneratorHeading,
  MemeFormContainer,
  MemeContainer,
  MemeText,
  FormElement,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  ButtonElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    showMemeContainer: false,
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: 8,
    imageUrl: '',
    topText: '',
    bottomText: '',
    currentFontSize: 8,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      showMemeContainer: true,
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      currentFontSize: fontSizeInput,
    })
  }

  onChangeImageInput = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  render() {
    const {
      showMemeContainer,
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      currentFontSize,
      imageUrl,
      topText,
      bottomText,
    } = this.state

    return (
      <MemeGeneratorOverallContainer>
        <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
        <MemeFormContainer>
          {showMemeContainer ? (
            <MemeContainer data-testid="meme" bgImage={imageUrl}>
              <MemeText fontSize={currentFontSize}>{topText}</MemeText>
              <MemeText fontSize={currentFontSize}>{bottomText}</MemeText>
            </MemeContainer>
          ) : null}
          <FormElement onSubmit={this.onSubmitForm}>
            <LabelElement htmlFor="imageInput">Image Url</LabelElement>
            <InputElement
              id="imageInput"
              type="text"
              placeholder="Enter the Image URL"
              value={imageUrlInput}
              onChange={this.onChangeImageInput}
            />

            <LabelElement htmlFor="topTextInput">Top Text</LabelElement>
            <InputElement
              id="topTextInput"
              type="text"
              placeholder="Enter the Top Text"
              value={topTextInput}
              onChange={this.onChangeTopText}
            />

            <LabelElement htmlFor="bottomTextInput">Bottom Text</LabelElement>
            <InputElement
              id="bottomTextInput"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomTextInput}
              onChange={this.onChangeBottomText}
            />

            <LabelElement htmlFor="fontSizeInput">Font Size</LabelElement>
            <SelectElement id="fontSizeInput" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(eachOption => (
                <OptionElement
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                >
                  {eachOption.displayText}
                </OptionElement>
              ))}
            </SelectElement>

            <ButtonElement type="submit">Generate</ButtonElement>
          </FormElement>
        </MemeFormContainer>
      </MemeGeneratorOverallContainer>
    )
  }
}

export default MemeGenerator
