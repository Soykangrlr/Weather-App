import { useAppContext } from "../../context/weatherContext";
import { API_TOKEN, API_URL } from "../../const/index";
import axios from "axios";
import { useState, useEffect } from "react";
function CartGroup() {
  const { state } = useAppContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    setLoading(true);
    const resp = await axios.get(`${API_URL}${state.city}`, {
      headers: {
        authorization: API_TOKEN,
      },
    });
    setData(resp.data.result);
    setLoading(false);
    console.log(resp.data.result);
  };
  useEffect(() => {
    loadData();
    console.log(state.city);
  }, [state.city]);
 
  return (
    <div className="container">
      {loading ? (
        <h1>Loadding...</h1>
      ) : (
        <>
          <h2 className="text-uppercase m-2 fw-bold fst-italic font-monospace text-center">
            {state.city} hava durumu
          </h2>
          <div className="row mt-3">
            {data.slice(0, 1).map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div class="card text-center">
                    {console.log(data)}
                    <div class="card-header">{item.day}{" (Bugün)"}</div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-2 itemCenter">
                          <p className=" fs-3  " height="40px">
                            {item.description.toUpperCase()}
                          </p>
                        </div>
                        <div className="col">
                          <img
                            src={item.icon}
                            alt=""
                            className="mb-2"
                            width="70px"
                          />
                        </div>
                        <div className="col itemCenter">
                          <p className=" fs-3">
                            {Number(item.degree).toFixed(0)}°C
                          </p>
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col">
                              <p>En Yüksek: {Number(item.max).toFixed(0)}°C</p>
                              <p>En Düşük : {Number(item.min).toFixed(0)}°C</p>
                            </div>
                            <div className="col">
                              <p>Gece : {Number(item.night).toFixed(0)}°C</p>
                              <p>Nem : {item.humidity}</p>
                            </div>
                            <div className="col  itemCenter">
                              <p className="fs-4"> {item.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mt-3">
            {data.slice(1, data.length).map((item, index) => {
              return (<>
                <div className=" col-lg-2" key={index}>
                  <div class="card text-center">
                    {console.log(data)}
                    <div class="card-header">{item.day}</div>
                    <div class="card-body">
                      <p className="description" height="40px">
                        {item.description.toUpperCase()}
                      </p>
                      <img
                        src={item.icon}
                        alt=""
                        className="mb-2"
                        width="50px"
                      />
                      <p>{Number(item.degree).toFixed(0)}°C</p>
                    </div>
                   
                  </div>
                </div>
               </>
              );
            
            })}
          </div>
        
        </>
      )}
    </div>
  );
}
export default CartGroup;
