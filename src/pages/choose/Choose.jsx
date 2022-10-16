import React from 'react'
import mack from 'assets/audiomack.png'
import boom from 'assets/boomplay.png'
import spotify from 'assets/spotify.png'
import youtube from 'assets/youtube.png'
import { ChooseContainer } from './styles'
import { Layout } from 'layout/Layout'
import { Link } from 'react-router-dom'

const Choose = () => {

  return (
    <Layout display={true}>
        <ChooseContainer>
            <h3 className='text'>Jane, would you like to</h3>
            <button type='button'>
                <Link to='/playlist'>Use our music Library</Link>
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
        </ChooseContainer>
    </Layout>
  )
}

export default Choose