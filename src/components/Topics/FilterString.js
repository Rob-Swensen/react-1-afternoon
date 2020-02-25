import React, {Component} from 'react';


class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            names: ['Ash', 'Rob', 'McCoy', 'Wells', 'Ky', 'Jett', 'John', 'Sarah', 'Ellen', 'Gordon', 'Andrea', 'Kristy', 'Lisa', 'Rachelle', 'Carson', 'Jason', 'Ben', 'Griff', 'Caleb', 'Hill', 'Michael'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterNames(input){
        let names = this.state.names;
        let filteredNames = [];

        for(let i = 0; i < names.length; i++){
            if(names[i].includes(input)){
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames: filteredNames});
    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: { JSON.stringify(this.state.names, null, 10) }</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.filterNames(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString