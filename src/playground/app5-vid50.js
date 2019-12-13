class IndecisionApp extends React.Component {
  // this app is using localStorage as kind a fake database. just a way of getting data to persist.
  constructor(props){
    super(props);
    this.state = {
      options:  this.props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", "fetching data");

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options){
        this.setState(()=>({ options }))
      }
    } catch (e){
      // do nothing
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", "saving data");
    if ( prevState.options.length !== this.state.options.length ){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json)
    }
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  handleDeleteOptions(){
    this.setState(()=>({options:[]}))
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({options: prevState.options.filter((option)=>optionToRemove !== option)}));
  }

  handlePick (){
    const randomNum = Math.floor(Math.random() * this.state.options.length) ;
    const option = this.state.options[randomNum];
    alert(option)
  }

  handleAddOption(option) {
    if(!option){
      return 'Enter a valid value to add';
    } else if ( this.state.options.indexOf(option) > -1 ){
      return 'This Option already exists';
    }
    this.setState((prevState)=>({options: prevState.options.concat(option)}));
  }

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div>charlie</div>
        <Action 
          hasOptions={this.state.options.length > 0 }
          handlePick={this.handlePick}/>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  };
}

IndecisionApp.defaultProps = {
  options: [ 'Jump', 'Dance']
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return(
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  const listItems = props.options.map((option, i)=>{
    return (
      <Option key={i} option={option} handleDeleteOption={props.handleDeleteOption}/>
    )
  });
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol>
        {props.options.length === 0 && <p>Please add an option</p>}
        {listItems}
      </ol>
    </div>
  );
}

const Option = (props) => {
  return(
    <div>
      <li>{props.option} 
        <button 
          onClick={(e)=>props.handleDeleteOption(props.option)}
          >
          Remove
        </button>
      </li>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=>({ error }));
    if(!error){
      e.target.elements.option.value = '';
    }
  }

  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button> Add Option </button>
        </form>
      </div>
    );
  };
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))