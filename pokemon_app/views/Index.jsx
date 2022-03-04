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
                {pokemon.map((pokemon,i) =>{
                    return(
                        <li>
                            Summoning {' '}
                            <a href = {`/pokemon/${i}`}>
                                {pokemon.name}
                                {pokemon[i]}
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