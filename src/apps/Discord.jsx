import * as React from 'react'
import WidgetBot, { API } from '@widgetbot/react-embed'

class Discord extends React.Component {
  api: API

  onAPI(api: API) {
    this.api = api
    api.on('signIn', user => {
      console.log(`Signed in as ${user.name}`, user)
    })
  }

  handleClick() {
    this.api.emit('sendMessage', `Hello world! from \`@widgetbot/react-embed\``)
  }
  render() {
    return (
      <div className='DiscordView'>

        <WidgetBot
          server="1043659503259877437"
          channel="1043659504157470772"
          onAPI={this.onAPI.bind(this)}
          height="100%"
          width="100%"
        />
      </div>
    )
  }
}

  export default Discord;