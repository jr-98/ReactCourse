import './App.css';
import {
  RecoilRoot,
  useRecoilState,
  atom,
  selector
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <TextInput />
    </RecoilRoot>
  );
}

//Constantes
const textInputState = atom({
  key: 'textInputState',
  default: ''
})

//Funciones
function TextInput() {
  const [text, setText] = useRecoilState(textInputState)
  const onInputChange = value => {
    setText(value.target.value)
  }
  return (
    <div>
      <input value={text} onChange={onInputChange} />
    </div>
  )
}

function Counter() {
  return (
    <span>

    </span>
  )
}

export default App;
