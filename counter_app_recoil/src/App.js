import './App.css';
import {
  RecoilRoot,
  useRecoilState,
  atom,
  selector,
  useRecoilValue
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <TextInput />
      <Counter />
    </RecoilRoot>
  );
}

//Constantes
const textInputState = atom({
  key: 'textInputState',
  default: ''
})
const textInputSelector = selector({
  key: 'textInputSelector',
  get: ({ get }) => {
    const text = get(textInputState)
    return text.length
  }
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
  const text = useRecoilValue(textInputSelector)
  // var length = text.length
  return (
    <span>
      {text}
    </span>
  )
}

export default App;
