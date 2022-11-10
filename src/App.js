import './App.scss';
import { Calc } from './components/Calculator/Calc'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TodoContainer from './components/Todo/TodoContainer'
import Counter from './components/Counter/Couter'
import Divider from '@mui/material/Divider';


function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={20}>
        <Grid className="App" item xs={4}>
           <Calc/>
        </Grid>
        <Divider/>
        <Grid className="App" item xs={4}>
           <TodoContainer/>
        </Grid>
        <Grid className="App" item xs={4}>
           <Counter/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
