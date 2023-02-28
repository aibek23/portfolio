import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './home.css'
import Todolist from '../../components/todolist/Todolist'
import { Container } from 'react-bootstrap'
import Carousel from '../../components/carousel/CarouselBox'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, mirror: 'false', once: true })
  }, [])
  return (
    <>
      {/* <i className="header__line"></i> */}
      <Carousel />
      <Container>
        <Todolist />
      </Container>
      <div className="skills_main">
        <div className="skills_wrapp ">
          <h1 data-aos="fade-up">МОИ НАВЫКИ</h1>
          <div className="container d-flex justify-content-center">
            <div className="skills_container">
              <div className="skills">
                <span className="name">html</span>
                <div className="percent">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
                <span className="value">90%</span>
              </div>
              <div className="skills">
                <span className="name">css</span>
                <div className="percent">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
                <span className="value">85%</span>
              </div>
              <div className="skills">
                <span className="name">bootstrap</span>
                <div className="percent">
                  <div className="progress" style={{ width: '73%' }}></div>
                </div>
                <span className="value">73%</span>
              </div>
              <div className="skills">
                <span className="name">JavaScript</span>
                <div className="percent">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
                <span className="value">80%</span>
              </div>
              <div className="skills">
                <span className="name">jquery</span>
                <div className="percent">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
                <span className="value">65%</span>
              </div>
              <div className="skills">
                <span className="name">react. js</span>
                <div className="percent">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
                <span className="value">80%</span>
              </div>
              <div className="skills">
                <span className="name">php</span>
                <div className="percent">
                  <div className="progress" style={{ width: '55%' }}></div>
                </div>
                <span className="value">55%</span>
              </div>
            </div>
          </div>

          <h3>чем я умею раотать</h3>
          <div className="container dis">
            <div className="logo__skills">
              <img
                src="https://w7.pngwing.com/pngs/440/1013/png-transparent-microsoft-visual-studio-visual-studio-code-source-code-editor-computer-icons-coder-blue-angle-text.png"
                alt=""
              />
            </div>
            <div className="logo__skills">
              <img
                src="https://juststickers.in/wp-content/uploads/2021/02/figma.png"
                alt=""
              />
            </div>
            <div className="logo__skills">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png"
                alt=""
              />
            </div>
            <div className="logo__skills">
              <img
                src="https://c7.uihere.com/files/503/316/899/text-symbol-orange-apps-sublime-text.jpg"
                alt=""
              />
            </div>
            <div className="logo__skills">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WebStorm_Icon.png/1200px-WebStorm_Icon.png"
                alt=""
              />
            </div>
            <div className="logo__skills">
              <img
                src=" https://yandex-images.clstorage.net/Wl5mU6086/98f4b78TmO_/Q7uSzRULFJGRPIvZ_rIjr6OvHDGG9-3CgCLwxKBFbK4U42MxGv-ELbuaMfUAyI7S2QxS9dRfOexf7pGd-sv37tXowcvSmNYR0TxIm7hwYm1hrN4wg_YtVJXkMdLwhi29xuBhP5W3mmSgRP2rX1bTQs0aEmAETah80SDSy-Le7jcF89vF2hBXElxkAJV_eChq_e6ZNVh7NIGM9f-dt9gvMIH6c3lSu1shpA4_olXc204L0V4tyJuhNdpqRsimXmf5z_yWw1JRXJFVIwOZO35oL_6lGfKdsbvOhLm5EDLbJfZGf3b5VzXcoSuBOCwTVV2ITNTYpcvQoLxbo4sFKdFquwG_3gVaG1JQXmxOGjMy42v0JZ81G7j3iU25eFlw0Sf3Bzvxehm-ku0sR3ug1FHTR4Rf2CIO32w91eeIDSoXZfTNvFhE0V1TEtVuQ9D2-KpreGUdMpN28s6KPfjV-pggcI6ytfAQNdYkrok5ol2fWEYJH5GiRt1uvV0kicnkHWCwxXVXB90S01kXbknb9XVj6rNgnnmUuDvFwPM4H_kboDFL9v31XreX5e4GMK9W2ZsMwVrZpYYdr73QpAENq1Vq8oI3lIFZHJ-cnKdL0XA45q2zrB8ynHc0Sc0wuR3_1C47RvP4_VMynqzijD0jH1dUSc6bVuECHK4826VJTGkfqfqJv5FLUJuT0lGhBR00_2NtPirWON8_-YuAf_eVNBEvd0l98XgYcpikogw765rcFs1HkxZsgBBgc5NjykQp3KJxh7cZSJwbV1hcK4AdPDEn6jsg2_5ceDBDRHexHTcYZTMBNf58m7sUJ-qNdKAUFRzIBRqd5MHf7b2V5kGDq9Vl9kB73oHdkFzUV-lBV_4xqmi7IJgxGHZ3TII5P9y41ajwy7Y7c9w5kaqkjLPoVRhUigGS0CBO3Gh60mqKCqteYX8HP9BLXdPVFBcmg91x-ino8-4Xv1R8_4PKMLccPM"
                alt=""
              />
            </div>
            <div className="logo__skills">
              <img
                src="https://www.kindpng.com/picc/m/665-6658168_stripes-transparent-rainbow-lgbt-logo-circle-hd-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <p>
        Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
        используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века. В то время некий
        безымянный печатник создал большую коллекцию размеров и форм шрифтов,
        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
        успешно пережил без заметных изменений пять веков, но и перешагнул в
        электронный дизайн. Его популяризации в новое время послужили публикация
        листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
        время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
        которых используется Lorem Ipsum.
      </p>
    </>
  )
}
export default Home
