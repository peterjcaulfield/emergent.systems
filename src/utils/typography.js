import Typography from 'typography'
import { colors } from '../utils/presets'
import presets from '../utils/presets'

const theme = {
  title: 'emergent',
  baseFontSize: '16px',
  baseLineHeight: 1.58,
  headerLineHeight: 1.075,
  scaleRatio: 1.7,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['700', '500', '400', '300']
    },
    {
      name: 'Vollkorn',
      styles: ['700', '500', '400', '300']
    },
    {
      name: 'Open Sans',
      styles: ['700', '500', '400', '300']
    },
    {
      name: 'Montserrat',
      styles: ['700', '500', '400', '300']
    },
    {
      name: 'Abril Fatface',
      styles: ['700', '500', '400', '300']
    },
    {
      name: 'Roboto',
      styles: ['700', '500', '400', '300']
    },
  ],
  headerFontFamily: [`Merriweather`],
  bodyFontFamily: [`Open Sans`],
  bodyWeight: 500,
  boldWeight: 700,
  headerWeight: 700,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      [presets.Mobile]: {
        html: {
          fontSize: `${(17 / 16) * 100}%`,
        },
      },
      [presets.Desktop]: {
        html: {
          fontSize: `${(18 / 16) * 100}%`,
        },
      },
      'html': {
        fontSmoothing: 'antialised', 
        fontStyle: 'normal',
      },
      'h1,h2,h3,h4,h5,h6': {
        color: '#000',
      },
      'ul, ol': {
        marginTop: rhythm(0.5),
      },
      h1: {
        marginTop: rhythm(2),
        marginBottom: rhythm(1),
        ...scale(1),
      },
      h2: {
        ...scale(5 / 6),
        marginTop: rhythm(1.8),
        marginBottom: rhythm(0.9),
      },
      h3: {
        ...scale(4 / 6),
        marginTop: rhythm(1.6),
        marginBottom: rhythm(0.8),
      },
      h4: {
        ...scale(3 / 6),
        marginTop: rhythm(1.4),
        marginBottom: rhythm(0.7),
      },
      h5: {
        ...scale(2 / 6),
        marginTop: rhythm(1.2),
        marginBottom: rhythm(0.6),
      },
      'p': {
        wordSpacing: '0.025em',
        color: `#23212A`,
      },
      'a': {
        color: '#08B2E3', 
      },
      'a:visited': {
        color: colors.primaryRed,
      }
    }
  }
}

const typography = new Typography(theme)
const { rhythm, scale } = typography

export { rhythm, scale, typography as default }
