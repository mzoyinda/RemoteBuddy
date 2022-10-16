import React from 'react'
import { BsMusicNoteList } from 'react-icons/bs'
import { Layout } from 'layout/Layout'
import { WhiteNoise } from './styles'

const Playlist = () => {

  return (
    <Layout display={false}>
        <WhiteNoise>
            <div className='title'>
                <div className='play'>
                    <p>Our Playlist</p>
                </div>
                <div className='library'>
                    <p>Your Library</p>
                </div>
            </div>
            <div className='sub_title'>
                <p className='white'>White Noise</p>
                <p className='info'>(It is the combnination of audible sound waves<br/> that help you stay calm and relaxed )</p>
            </div>
            <ul>
                <li>
                    <BsMusicNoteList/>
                    <span>Rain sounds</span>
                </li>
                <li>
                    <BsMusicNoteList/>
                    <span>Cute cackles</span>
                </li>
                <li>
                    <BsMusicNoteList/>
                    <span>Beach Sound</span>
                </li>
                <li>
                    <BsMusicNoteList/>
                    <span>Wind Sound</span>
                </li>
            </ul>
            <p className='import_cta'>+ Import from your Library</p>
        </WhiteNoise>
    </Layout>
  )
}

export default Playlist