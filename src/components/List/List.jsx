import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sortArrey } from "../../helpers";
import ListData from "../../utils/data.json";
import ListItem from "../ListItem/ListItem";
import "./List.css";

function List() {
  const [data, setData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState("");
  const navigate = useNavigate();

  const memoSortData = useMemo(() => data.length && sortArrey(data), [data]);

  useEffect(() => {
    Promise.resolve(ListData).then((data) => {
      setData(data);
    });
  }, []);

  const HandleClick = useCallback(
    (id) => {
      setCurrentPrice(memoSortData[id].join());
    },
    [memoSortData]
  );

  return (
    <>
      <div className="containerList">
        <ul className="list">
          {!!ListData.length &&
            ListData.map((item, idx) => {
              return (
                <ListItem
                  key={idx}
                  id={item.id}
                  onHandleClick={HandleClick}
                ></ListItem>
              );
            })}
        </ul>
        {!!currentPrice && (
          <p className="pricesItemList">Price: {currentPrice}</p>
        )}
      </div>
      <button className="buttonBack" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default List;
