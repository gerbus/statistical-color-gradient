import React from 'react'
import logo from './logo.svg'
import './App.css'

const colors = {
  red: '#f00',
  orange: '#f80',
  yellow: '#ff0',
  green: '#0f0',
  blue: '#08f',
  purple: '#80f',
}

const spectralColor = function(i) {
  const l = i * (-300) + 700;
  return spectral_color(l);
}
const spectral_color = function(l) { // lambda l <400,700> [nm]
  let t;
  let r=0.0;
  let g=0.0;
  let b=0.0;

       if ((l>=400.0)&&(l<410.0)) { t=(l-400.0)/(410.0-400.0); r=    +(0.33*t)-(0.20*t*t); }
  else if ((l>=410.0)&&(l<475.0)) { t=(l-410.0)/(475.0-410.0); r=0.14         -(0.13*t*t); }
  else if ((l>=545.0)&&(l<595.0)) { t=(l-545.0)/(595.0-545.0); r=    +(1.98*t)-(     t*t); }
  else if ((l>=595.0)&&(l<650.0)) { t=(l-595.0)/(650.0-595.0); r=0.98+(0.06*t)-(0.40*t*t); }
  else if ((l>=650.0)&&(l<700.0)) { t=(l-650.0)/(700.0-650.0); r=0.65-(0.84*t)+(0.20*t*t); }
       if ((l>=415.0)&&(l<475.0)) { t=(l-415.0)/(475.0-415.0); g=             +(0.80*t*t); }
  else if ((l>=475.0)&&(l<590.0)) { t=(l-475.0)/(590.0-475.0); g=0.8 +(0.76*t)-(0.80*t*t); }
  else if ((l>=585.0)&&(l<639.0)) { t=(l-585.0)/(639.0-585.0); g=0.84-(0.84*t)           ; }
       if ((l>=400.0)&&(l<475.0)) { t=(l-400.0)/(475.0-400.0); b=    +(2.20*t)-(1.50*t*t); }
  else if ((l>=475.0)&&(l<560.0)) { t=(l-475.0)/(560.0-475.0); b=0.7 -(     t)+(0.30*t*t); }

  const rgb = {
    r: r, // [0,1]
    g: g, // [0,1]
    b: b, // [0,1]
  }

  return rgb;
}

const styles = {
  barContainer: {
    display: 'flex',
    flex: 1,
  },
}

function App() {
  const FatBars = () => (
    <>
      {Object.keys(colors).map(colorKey => (
        <div style={{...styles.barContainer, backgroundColor: colorKey}}>
        </div>
      ))}
    </>
  )

  const SpectrumBars = () => {
    const width = window.innerWidth;
    let pixelArray = [];
    for (let i = 0; i < width; i++) {
      pixelArray.push(spectralColor(i/(width-1)))
    }

    return (
      <>
        {pixelArray.map(rgb => (
          <div style={{...styles.barContainer, backgroundColor: `rgb(${255*rgb.r},${255*rgb.g},${255*rgb.b})`}}>
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      <div style={{display: 'flex', flex: 1, height: '200px'}}>
        <FatBars />
      </div>
      <div style={{display: 'flex', flex: 1, height: '200px'}}>
        <SpectrumBars />
      </div>
    </>
  )
}

export default App
