console.log('build-it-visible-state');

class Visible extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle () {
    console.log(this.state.isVisible);
    this.setState((prevState)=>{
      return {isVisible: !prevState.isVisible}
    });
  }

  render(){
    return(
      <div>
        <h1>Visible</h1>
        <button onClick={this.handleToggle}> {this.state.isVisible ? "Hide" : "Show" } Details</button>
        {this.state.isVisible && <p>These are the details that get hidden</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));