import { Component } from "react"; 
import "./index.css"

class Speedometer extends Component{ 
    state ={count:0} 
    onaccelerate=()=>{
        this.setState((prevState)=>(
            {
                count:prevState.count+10
            }
        ))
    } 
    onApplyBrake=()=>{
        this.setState((prevState)=>(
            {
                count:prevState.count-10
            }
        ))
    }
    render(){ 
        const {count}=this.state
        return(
           <div className="card">
             <h1 className="main-heading">Speedometer</h1> 
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKQknMR9_RbRSE78HJgLMDprVK2ViMggIRg&usqp=CAU" alt="speedometer"/>
                 <p className="para">Speed is {count}mph</p> 
                  <p className="para2">min limit is0mph.max limit is200mph</p> 
                  <button className="button1" onClick={this.onaccelerate}>Acclerate</button> 
                  <button className="button2" onClick={this.onApplyBrake}>Apply brake</button>
           </div>

        )
    }
} 
export default Speedometer