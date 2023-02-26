import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CountButton from './components/CountButton'
import { Slider, Switch } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2'


const DEFAULT_SLIDER_VALUE = 50;

function App() {
  const [count, setCount] = useState(0)
  const [slider, setSlider] = useState(DEFAULT_SLIDER_VALUE);
  const [values, setValues] = useState([]);

  const updateCount = () => {
    setCount((value) => value +1);
  }

const handleChangeSlider = event => {
  setSlider(event.target.value);
}

const handleChange = event => {
  setValues({...values,[event.target.name]: event.target.value});
}
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Sign Up</h1>
      {/* <div className="card">
        <CountButton count = {count} onClick={updateCount} />
        <Slider name='slider' value={values.slider || DEFAULT_SLIDER_VALUE} onChange={handleChange} />
        <Switch name="switch" value={values.switch || false} onChange={handleChange}/>
        <p>
          Slider: {values.slider || DEFAULT_SLIDER_VALUE}
        </p>
      </div> */}
     
      <p>
        <Grid2 width={'500px'} container spacing={2}>
          <Grid2 xs={6}>
            <TextField fullWidth id="outlined-basic" label="First" variant="outlined" />
          </Grid2>
          <Grid2 xs={6}>
            <TextField fullWidth id="outlined-basic" label="Last" variant="outlined" />
          </Grid2>
          <Grid2 xs={12}>
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
          </Grid2>
        </Grid2>
    </p>
    </div>
  )
    }

export default App
