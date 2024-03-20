import data from "./data";


function App() {
  const arr = data.map(item =>item.src.large)
  console.log(arr)
  return (
    <div>
      <div className="title">Image Gallery</div>
      <div className="container">
        {
          data.map((item, index)=>(
            <div key={index} className="item">
              <img src={item.src.large} alt="" />
              <p>{item.photographer}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default App;
