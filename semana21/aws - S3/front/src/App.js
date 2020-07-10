import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`
const TitleWrapper = styled.h3`
  text-align: center
`

function App() {

  const sendFile = async (event) => {
    try {
      event.preventDefault()
      const data = new FormData();
      data.append("file", event.target.files[0]);
      console.log(event.target.files)
      const result = await axios.put('http://localhost:3001/home/send', data)
      console.log(result)
    }
    catch (err) {
      console.log('tente novamente')
    }
  }

  return (
    <div>
      <div>
        <TitleWrapper>Selecione um arquivo</TitleWrapper>
        <FormWrapper>
          <input type='file' onChange={sendFile}/>
          <button>Enviar</button>
        </FormWrapper>
      </div>
    </div>
  );
}

export default App;
