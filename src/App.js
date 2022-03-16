import {useState} from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';



function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
   <Container>
     <MainHeader title='Budget'/>
     <DisplayBalance title='Your Blanace' value='2,550.53' size='small'/>

     <DisplayBalances />

    <MainHeader title="History" type="h3" />
    
    <EntryLines entries={entries} />

    <MainHeader title="Add new transaction" type="h3" />

   </Container>
  );
}

export default App;


var initialEntries = [
  {
    description:'Work income',
    value:"$1000",
    isExpense:false
  },
  {
    description:"water bill",
    value:"$20,00",
    isExpense:true
  },
  {
    description:"rent",
    value:"$3000",
    isExpense:true
  },
  {
    description:"power bill",
    value:"$50",
    isExpense:true
  },
]