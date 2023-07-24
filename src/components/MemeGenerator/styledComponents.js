import styled from 'styled-components'

export const MemeGeneratorOverallContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Open Sans';
  padding: 15px;
`
export const MemeGeneratorHeading = styled.h1`
  font-size: 22px;
  color: #35469c;
  font-weight: bold;
`

export const FormElement = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const LabelElement = styled.label`
  font-size: 14px;
  color: #7e858e;
  align-self: flex-start;
`

export const InputElement = styled.input`
  width: 90%;
  max-width: 400px;
  border: 1px solid #7e858e;
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
  color: #7e858e;
  margin-top: 8px;
  margin-bottom: 10px;
  align-self: flex-start;
`

export const SelectElement = styled.select`
  width: 90%;
  max-width: 400px;
  height: 35px;
  border-radius: 5px;
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans'
  outline: none;
  align-self: flex-start;
  border: 1px solid #7e858e;
`

export const OptionElement = styled.option`
  font-size: 14px;
  padding-top: 10px;
  padding-right: 14px;
  padding-bottom: 10px;
  padding-left: 14px;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const ButtonElement = styled.button`
  height: 35px;
  width: 100px;
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const MemeContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: 'Open Sans';
  color: #ffffff;
  margin-bottom: 15px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  @media (min-width: 768px) {
    order: 1;
    height: 350px;
  }
`

export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
`
export const MemeFormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`
