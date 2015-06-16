var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Luciano Rubio',
      friends: ['Kath', 'Kike', 'Keko']
    }
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});