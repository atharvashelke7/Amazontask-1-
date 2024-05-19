
import Books from './components/Books';

function App() {
  return (
    <div>

      <h1 style={{ fontWeight: "Bold", fontSize: "30px", paddingLeft: "120px", position: "relative", top: "170px" }}>Books in focus</h1>

      <div style={{


        width: "200px",
        gap: "50px",
        display: "flex",
        alignSelf: "normal",
        paddingLeft: "130px",
        marginTop:"200px"



      }}>
        <Books imgLink="https://m.media-amazon.com/images/I/611KV9tJ8HL.AC_SX250.jpg" heading=" Craig Thompson" rupees="1,121" />
        <Books imgLink="https://m.media-amazon.com/images/I/51MMHNRD3yL.AC_SX250.jpg" heading="Paulo Coelho" rupees="324" />
        <Books imgLink="https://m.media-amazon.com/images/I/51wqIb0xbNL.AC_SX250.jpg" heading="Wounder Book" rupees="1,171" />
        <Books imgLink="https://m.media-amazon.com/images/I/51iAmVDnZSL.AC_SX250.jpg" heading="Neeraj Rao" rupees="900" />
        <Books imgLink="https://m.media-amazon.com/images/I/41SFe7HDQ2L.AC_SX250.jpg" heading="KVS Madaan" rupees="1,200" />
        <Books imgLink="https://m.media-amazon.com/images/I/51Q9ODzXXlL.AC_SX250.jpg" heading="Oswaal Edition " rupees="2,000" />

      </div>


    </div>

  );
}

export default App;
