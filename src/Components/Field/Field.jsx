import React from 'react'
import './Field.css'
export default function Field(props) {
 // console.log(props);
  let pos = props.position;
  let enemy = props.enemy;
    let arr = [];
    for (let i = 0; i < props.field.length; i++) {
        for (let j = 0; j < props.field[i].length; j++) {
            let content;
            switch (props.field[i][j]) {
                case 1:
                    content = 'occupied';
                    break;
                case 3:
                    content = 'bomb';
                    break;
                case 5:
                    content = 'hor_fire';
                    break;
                default:
                    content = 'empty';
            }
          if ((i === pos.x && j === pos.y) ) {
            content = 'player';
                if (props.bomb) {
                    props.field[i][j] = 3;
                    content += ' bomb';
                    let bombSocket = {bomb: pos};
                    props.socket.send(JSON.stringify(bombSocket));
                }
            }
         if (enemy && i === enemy.x && j === enemy.y){
           content = 'player';
         }
            arr.push(<div className={[content, 'block'].join(" ")}/>);
        }
    }
    return (
        <div className={'container'}>{arr}</div>
    );
}