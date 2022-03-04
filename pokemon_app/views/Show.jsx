const React = require('react')

const myStyle = {
    color:'#355070'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <div>
            <h1 style = {myStyle}>Gotta Catch Em ALLLLLLL!</h1>
            <h2> {pokemon.name} I Choose You</h2>
            <br></br>
            <div>
                <img src = {pokemon.img + '.jpg'}/> 
            </div>
            <a href = '/pokemon'> Back </a>
            </div>
        )
    }
}

module.exports= Index

// {pokemon.map((pokemon,x) =>{
//     return(
//         <li>
//             Summoning {' '}
//             <a href = {`/pokemon/${x}`}>
//                 {pokemon.name}
//                 {pokemon[x]}
//             </a>
//         </li>
//     )
// })}