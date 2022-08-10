import React from 'react';;

class Home extends React.Component {
constructor(props) {
super(props);
}

onCLick = () => {
  console.log('props', this.props)
  this.props.router.navigate('/detail')
}
render() {
return (
  <div>
    Home
    <div onClick={() => this.onCLick()}>Redirect</div>
  </div>
)

}
}

export default Home