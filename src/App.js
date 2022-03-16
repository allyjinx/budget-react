import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';


function App() {
  return (
   <Container>
     <MainHeader title='Budget'/>
     <DisplayBalance title='Your Blanace' value='2,550.53' size='small'/>

     <DisplayBalances />

    <MainHeader title="History" type="h3" />
      <EntryLine description='income' value='$10.00'/>
      <EntryLine description='expense' value='$10.00' isExpense/>

    <MainHeader title="Add new transaction" type="h3" />

   </Container>
  );
}

export default App;
