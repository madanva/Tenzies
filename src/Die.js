import React from "react"

export default function Die (props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const dots = [];

    switch (props.value) {
        case 1:
          dots.push(<span key={0} className="dot center" />);
          break;
        case 2:
          dots.push(<span key={0} className="dot top-left" />);
          dots.push(<span key={1} className="dot bottom-right" />);
          break;
        case 3:
          dots.push(<span key={0} className="dot top-left" />);
          dots.push(<span key={1} className="dot center" />);
          dots.push(<span key={2} className="dot bottom-right" />);
          break;
        case 4:
          dots.push(<span key={0} className="dot top-left" />);
          dots.push(<span key={1} className="dot top-right" />);
          dots.push(<span key={2} className="dot bottom-left" />);
          dots.push(<span key={3} className="dot bottom-right" />);
          break;
        case 5:
          dots.push(<span key={0} className="dot top-left" />);
          dots.push(<span key={1} className="dot top-right" />);
          dots.push(<span key={2} className="dot center" />);
          dots.push(<span key={3} className="dot bottom-left" />);
          dots.push(<span key={4} className="dot bottom-right" />);
          break;
        case 6:
          dots.push(<span key={0} className="dot top-left" />);
          dots.push(<span key={1} className="dot top-right" />);
          dots.push(<span key={2} className="dot middle-left" />);
          dots.push(<span key={3} className="dot middle-right" />);
          dots.push(<span key={4} className="dot bottom-left" />);
          dots.push(<span key={5} className="dot bottom-right" />);
          break;
        default:
          break;
      }


    return (
        <div 
        className = "die--box" 
        onClick = {props.holdDice} 
        style = {styles} >
            {dots}
        </div>
    )
}