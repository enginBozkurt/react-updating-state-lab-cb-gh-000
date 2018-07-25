// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitRateButton = () => {
   this.setState({
     settings: {
       ...this.state.settings,
       bitrate: 12
     }
   })
 }

 handleResolutionButton = () => {
   this.setState({
     settings: {
       ...this.state.settings,
       video: { resolution: '720p'}
     }
   })
 }



}
