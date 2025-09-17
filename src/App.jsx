import Header from "./components/Header"
import Title from "./components/Title"
import Article from "./components/Article"
import AsideDiv from "./components/AsideDiv"
import CardPost from "./components/CardPost"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Title />
      <div className="container">
        <Header nombre={"Tomás"} />
        <main className="content">
          <Article />
          <Article />
          <Article />
          <Article />
        </main>
        <aside className="sidebar">
          <AsideDiv />
          <AsideDiv />
          <AsideDiv />
        </aside>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <Footer />
      </div>
    </>
  )
}

export default App
