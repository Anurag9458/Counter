import React,{useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Segment, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const App = () => {
  const [temp,setTemp]=useState(0);
  const handleIncrement=()=>{
    const a=temp+1;
    setTemp(a);
  }
  const handleDecrement=()=>{
    const a=temp-1;
    if(a<=0)setTemp(0);
    else
    setTemp(a);
  }


  return (<>
    <div style={{margin:'10% 25%'}}>
      <Segment textAlign="center" color="red" compact>
        <Grid>
        <Grid.Row>
         <h1>Count : {temp}</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column  >
            <Button color="green" onClick={handleIncrement}>Increment</Button>
          </Grid.Column>
          <Grid.Column floated="right" width={6} >
            <Button color="red" onClick={handleDecrement}>Decrement</Button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div><h1>Anurag Gupta  (Registration No: 12010476)</h1></div>
    </div>
    </>
  );
};

export default App;
