import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: {},
      time: new Date()
    }
  }

  componentDidMount() {

    this.timerID = setInterval(() => this.tick(), 1000);

    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({quote: data})
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }


  render() {
    return (
    <div className = 'main'>
      <div className= 'time'>
        {this.state.time.toLocaleTimeString()}
    </div>
    <div className='block1'>
      <div className='inner1'>
        <div className='titleCard'>
          Welcome Pupperbot!
        </div>
      </div>
    </div>
    <div className='block2'>
      <div className='inner2'>
        <article className ='linktitle'>
          Links
        </article>
        <div className ='links'>
          <a href="https://github.com/pupper-bot">Github</a>
          <a href="https://linkedin.com">Linkedin</a>
          <a href="https://protonmail.com">Protonmail</a>
          <a href="https://reddit.com">Reddit</a>
          <a href="https://4chan.org/g/">4chan</a>
        </div>
      </div>
    </div>
    <div className='block3'>
      <div className='inner3'>
        <article className = 'linktitle'>
          Information
        </article>
        <div className = 'infoMain'>
        <p className = 'infoBar'>
          Creator: Pupperbot
        </p>
        <p className = 'infoBar'>
          DotFiles: <a href="https://github.com/pupper-bot/T440p_i3config">Here</a>
        </p>
        <p className = 'infoBar'>
          Distro: Fedora W/ i3
        </p>
        <p className ='infoBar'>
          Contact: pupperbot@protonmail.com
        </p>
        </div>
        <div className = 'qotd'>
          "{this.state.quote.en}"
          <div>
          -{this.state.quote.author}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
