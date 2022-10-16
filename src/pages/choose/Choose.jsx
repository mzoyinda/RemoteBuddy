import React from 'react'
import { Container } from '../styles'
import mack from 'assets/audiomack.png'
import boom from 'assets/boomplay.png'
import spotify from 'assets/spotify.png'
import youtube from 'assets/youtube.png'
import { Layout } from 'layout/Layout'

const Choose = () => {

  return (
    <Layout>
        <Container>
            <h3 className='text'>Jane, would you like to</h3>
            <button type='button'>
                Use our music Library
            </button>
            <div className='line_contain'>
                <div className='line'></div>
                <p className='line_text'>Or choose from your favorite Muisc apps below</p>
                <div className='line'></div>
            </div>

            <div className='libraries_wrap'>
                <div className='library'>
                    <img alt='AudioMack' src={mack}/>
                </div>
                <div className='library'>
                    <img alt='Boomplay' src={boom}/>
                </div>
                <div className='library'>
                    <img alt='Spotify' src={spotify}/>
                </div>
                <div className='library'>
                    <img alt='Youtube' src={youtube}/>
                </div>
            </div>
        </Container>
    </Layout>
  )
}

export default Choose