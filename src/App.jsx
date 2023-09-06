import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'

const items = [
  {
    title: "Section 1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Section 2",
    content: `from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero`
  },
  {
    title: "Section 3",
    content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 3"
  }
]


function App() {
  const accordions = items.map((item) => {
    return <Accordion title={item.title} content={item.content} />
  })

  return (
    <>
      <Carousel />
      {accordions}
    </>


  )
}

export default App
