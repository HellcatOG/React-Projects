export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.descriptions}</p>
    </li>
  );
}
