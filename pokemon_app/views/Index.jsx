const React = require('react')

const myStyle = {
    color:'#355070'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <h1 style = {myStyle}>See All The Pokemon!</h1>
        )
    }
}

module.exports= Index