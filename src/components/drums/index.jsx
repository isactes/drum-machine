import { useEffect, useState } from "react";
import Sounds from "../../utilities";
import "./index.css"
function SoundDrumds() {

  const [activeKey, setActiveKey] = useState('')


  useEffect(() => {
    handleUseEffect()
  }, [])

  const handleUseEffect = () => {
    const useEffectHandle = document.addEventListener('keydown', (event) => {
      console.log('✨✨', event.key)
      handleOnclick(event.key)
    })
    return useEffectHandle
  }

  const handleOnclick = (selector) => {
    const audio = document.getElementById(selector)
    if (audio) {
      console.log('✨', audio)
      audio.play();
      setActiveKey(selector)
    } else {
      console.error('💀 error')
    }
  }

  return (
    <>
      <div className="drums" id="drum-machine">
        <h2>Build a Drum Machine</h2>
        <div className="drum-flex" id="display">
          <div className="drum-pads">
            {Sounds.map(drum => (
              <button
                key={drum.src}
                className="drum-pad"
                id={drum.src}
                onClick={() => handleOnclick(drum.text)}
              >
                {drum.text}
                <audio
                  className="clip"
                  id={drum.text}
                  src={drum.src}
                />
              </button>
            ))}
          </div>
          <div className="name-drum">
            {activeKey}
          </div>
        </div>
      </div>
    </>
  )
}

export default SoundDrumds