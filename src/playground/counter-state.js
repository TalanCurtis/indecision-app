class CounterApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    const stringCount = localStorage.getItem('count');
    const count = parseInt( stringCount, 10);
    if (!isNaN(count)){
      this.setState(()=>({ count }))
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count)
    }
  }

  handleAddOne ()  {
    // set state can be a function with prevState 
    console.log('add');
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne ()  {
    console.log('minus');
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset () {
    console.log('reset');
    // this.setState(obj) old way able to access stale values since setState is asynchronous
    // this.setState({count:0});
    // new way that has access to prevState
    this.setState(()=>{
      return { count: 0 }
    });
  } 

  render(){
    return(
      <div>
        counter state
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> reset </button>
      </div>
    )
  };
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))