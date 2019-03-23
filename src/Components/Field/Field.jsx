import React from 'react'
import './Field.css'
import Logic from './Logic'
export default function Field(props) {
  console.log(props);
  let pos = props.position;
    if (Logic.islegal(pos, props.delta)) {
        pos.x += props.delta.x;
        pos.y += props.delta.y;
    }
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
          if (i === pos.x && j === pos.y) {
                content = 'player';
                if (props.bomb) {
                    props.field[i][j] = 3;
                    content += ' bomb';
                    console.log(content);
                    let bombSocket = {bomb: pos};
                    props.socket.send(JSON.stringify(bombSocket));
                    props.callback();
                    setTimeout(() => {
                      //  boom(i, j, props.field, 0);
                        props.callback();
                    }, 2000);
                }
            }

            arr.push(<div className={[content, 'block'].join(" ")}></div>);
        }
    }

    return (
        <div className={'container'}>{arr}</div>
    );
}