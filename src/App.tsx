import './index.css'

function App() {

  return (
    <>
    <section>
      <header>
        <h1>Welcome to the A\W Journal</h1>
        <h2>Blogging my thoughts</h2>
      </header>
      <main>
        <div className="container">
          <div className="about-section">
            <p>This is where I share my views, research, etc. on social issues.</p>
          </div>
        </div>
        <div className="container">
          <div className="post">
            <h3>Post 1</h3>
            <p>This is the first post</p>
          </div>
          <div className="post">
            <h3>Post 2</h3>
            <p>This is the second post</p>
          </div>
          <div className="post">
            <h3>Post 3</h3>
            <p>This is the third post</p>
          </div>
          <div className="post">
            <h3>Post 4</h3>
            <p>This is the fourth post</p>
          </div>
          <div className="post">
            <h3>Post 5</h3>
            <p>This is the fifth post</p>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default App
