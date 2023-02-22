import "./ListItem.css";

function ListItem({ id, onHandleClick }) {
  return (
    <li className="list_itemWrapper" onClick={() => onHandleClick(id)}>
      <p className="itemPrice">Id: {id}</p>
    </li>
  );
}

export default ListItem;
