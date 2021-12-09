import React from "react";
import './FetchRandomUser.css'


export default class FetchRandomUser extends React.Component {

  
  state = {
    loading: true,
    person: null
  };


  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }
  state={
    Colornames:{
      title:false
      
    }
    

   }
    chclick = (e) => {
      var {name, checked} = e.target;

      this.setState((e)=>{
        var SelectedSport=e.Colornames;
        return SelectedSport[name]=checked
        
      });
    };
  
  render() {
    
   
      var displaysports=Object.keys(this.state.Colornames).filter((x)=>this.state.Colornames[x]);
   
      
    

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div className="fetchRandomUser">
        
        <center>
          <div className="container">
            <h1 className="title">Choose your Nickname</h1>
            <div className="form">
              <div className="items">
            <input type="checkbox" name={this.state.person.name.title} onChange={this.chclick}/><label>{this.state.person.name.title}</label>&nbsp;&nbsp;
            </div>
            <div className="items">
            <input type="checkbox" name={this.state.person.name.last} onChange={this.chclick}/><label>{this.state.person.name.last}</label>&nbsp;&nbsp;
            </div>

            <div className="items">
            <input type="checkbox" name={this.state.person.name.first} onChange={this.chclick}/><label>{this.state.person.name.first}</label>&nbsp;&nbsp;
            </div>
            </div>
            
           
            <div className="print-values">
                <p>You Have Selected:{displaysports+""}</p>
            </div>   
            </div>
          </center>
      </div>
    );
  }
}
