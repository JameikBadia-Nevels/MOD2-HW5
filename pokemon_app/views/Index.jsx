const React = require('react')

const myStyle = {
    color:'#355070'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <div>
            <h1 style = {myStyle}>See All The Pokemon!</h1>
            <ul>
                {pokemon.map((pokemon,x) =>{
                    return(
                        <li>
                            Summon {' '}
                            <a href = {`/pokemon/${x}`}>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                {pokemon[x]}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

module.exports= Index