import { useCountUp } from 'react-countup';

const Card = (props) => {
  let value = props  
  if(props.value){
    value = parseFloat(props.value.replace(/,/g, ''));
  }
  const { countUp, start } = useCountUp({
    start: 0,
    end: value,
    duration: 10,
    separator: ","
  })
  
  return (
    <div className={`card text-white mb-3 ${props.color}`}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-right display-4">
          {
            value == undefined ? "Loading..." : countUp
          }
          {/* {props.value} */}
        </p>
      </div>
    </div>
  )
}

export default Card;
