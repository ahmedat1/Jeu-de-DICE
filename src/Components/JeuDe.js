import React from"react";
class JeuDe extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
             face:null, 
             compteur:0, 
             fin:false
            };
    }
    
    jouer = () => {
        const valeur= Math.floor(Math.random() * 6) + 1;
        if(valeur===this.props.cache){
            this.setState({compteur:this.state.compteur+1, face:valeur, fin:true})
        }else {
            this.setState({compteur:this.state.compteur+1, face:valeur, fin:false})
        }
    }

        
    initialiser = () =>{
        this.setState({ face:0, compteur:0, fin:false});
    }

    
    render() {
        return(
    <div className="body" >
        <div className="jeu">
            <img src={this.state.face==null?"images/Dé.PNG":`images/face${this.state.face}.PNG`}/>
            <h1>Jeu de DICE</h1>
            <h2>Face :{this.state.face}</h2>
            <h2>Nombre D'essais : {this.state.compteur}</h2>
            {!this.state.fin?<button className="btn-jouer" onClick={this.jouer}>JOUER</button>
            :<div><p className="Msg-bravo">Bravo vous avez trouvez la face cachée.....</p>
            <button className="btn-initialiser" onClick={this.initialiser}>INITIALISER</button></div>
            }
        </div>
    </div>
      )
    }
}
export default JeuDe