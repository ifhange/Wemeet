import React from 'react';
import {Link} from 'react-router';
import Store from '../stores/FriendListStore';
import Actions from '../actions/FriendListAction';

class FriendList extends React.Component {
  constructor(props){
    super(props);
    this.state = FriendListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FriendListStore.listen(this.onChange);
    FriendListStore.getFriendName();  
  }

  componentWillUnmount() {
    FriendListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardCharacters = this.state.characters.map((character) => {
      return (
        <li key={character.characterId}>
          <Link to={'/characters/' + character.characterId}>
            <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
          </Link>
        </li>
      )
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
              <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2015 Sahat Yalkabov.</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
              <ul className='list-inline'>
                {leaderboardCharacters}
              </ul>
            </div> 
          </div>
        </div>
      </footer>
    );
  }
}

export default FriendList;

/*
map:一個for-each循环，和Jade和Handlebars中的类似，
但在这里你可以将结果分配给一个变量，然后你就可以在JSX里使用它了，
就和用其它变量一样。它在React中很常见，你会经常用到。

Link组件：当指定合适的href属性时会渲染一个链接标签，
它还知道链接的目标是否可用，从而给链接加上active的类。
如果你使用React Router，你需要使用Link模块在应用内部进行导航。
*/
