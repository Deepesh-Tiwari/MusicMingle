import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            count : 0,
            count1: 1,
        };
        console.log("CHILD CONSTRUCTOR")
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT")
    }

    render(){
        // NEVER UPDATE STATE VARIABLES DIRECTLY
        const { count,count1 } = this.state;
        console.log("CHILD RENDER")
        return(
            <div>
            <hr/>
            <h2>COUNT : {count}</h2>
            <h2>COUNT1 : {count1}</h2>
            <button onClick={ () => {
                this.setState({
                    count: this.state.count + 1,
                    count1: this.state.count1 + 2,
                })
            }}>count increase</button>
            <h2>This is a REACT PRACTICE SESSION</h2>
            <h2>NAME : {this.props.name}</h2>
            <h2>CITY : Alwar</h2>
            </div>
        )
    }
}

export default UserClass;