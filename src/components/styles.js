import glamorous from 'glamorous'

export const Paper = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
})

export const Emphasis = glamorous.strong({
  textAlign: 'center',
  fontWeight: '400'
})

export const Container = glamorous.span({
  padding: '16px',
  textAlign: 'center'
})

export const Main = glamorous.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})
