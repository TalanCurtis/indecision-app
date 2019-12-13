import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  // this app is using localStorage as kind a fake database. just a way of getting data to persist.
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(()=>({options:[]}))
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState)=>({options: prevState.options.filter((option)=>optionToRemove !== option)}));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length) ;
    const option = this.state.options[randomNum];
    this.setState(()=>({selectedOption: option}))
  };

  handleAddOption = (option) => {
    if(!option){
      return 'Enter a valid value to add';
    } else if ( this.state.options.indexOf(option) > -1 ){
      return 'This Option already exists';
    }
    this.setState((prevState)=>({options: prevState.options.concat(option)}));
  };

  handleClearSelectedOption = () => {
    this.setState(()=>({selectedOption:undefined}));
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

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0 }
            handlePick={this.handlePick}/>
            <div className="widget">
              <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption handleAddOption={this.handleAddOption} />
            </div>

        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  };
}

IndecisionApp.defaultProps = {
  options: [ 'Jump', 'Dance']
}

export default IndecisionApp;