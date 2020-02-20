import React,{Component} from 'react';


class Apps extends Component{
	constructor(props){
		super(props)
		this.state={show:false};
		this.toggleDiv=this.toggleDiv.bind(this);
	}
	toggleDiv=()=>{
		const {show}=this.state;
		this.setState({ show : !show})
	}

	render()
	{
		return(
			<div>
			<button onClick={this.toggleDiv}>Read More</button>
	
			{this.state.show && <Box/>}
			</div>
			)
	}
}
export class Box extends Component{
	render(){
		return(
			<p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>
			)
	}
}
export default Apps