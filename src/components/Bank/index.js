import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { BankContainer, BankBg, VideoBg, BankContent, BankH1, BankP, BankBtnWrapper, ArrowForward, ArrowRight } from './BankElements'
import { Button } from '../ButtonElements'

const Bank = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <BankContainer id='home'>
      <BankBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </BankBg>
      <BankContent>
        <BankH1> Virtual Banking Make Easy</BankH1>
        <BankP>Sign up for a new accoun today and recive $250 in credit towards your next payment</BankP>
        <BankBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </BankBtnWrapper>
      </BankContent>
    </BankContainer>
  )
}

export default Bank
