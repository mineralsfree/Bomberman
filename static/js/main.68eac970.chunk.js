(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(3),s=n.n(a),c=(n(15),n(4)),r=n(5),d=n(7),l=n(6),u=n(8),m=n(1);n(16),n(17);function h(e){for(var t=e.position,n=e.enemy,i=[],a=0;a<e.field.length;a++)for(var s=0;s<e.field[a].length;s++){var c=void 0;switch(e.field[a][s]){case 1:c="occupied";break;case 3:c="bomb";break;case 5:c="hor_fire";break;default:c="empty"}if(a===t.x&&s===t.y&&(c="player",e.bomb)){e.field[a][s]=3,c+=" bomb";var r={bomb:t};e.socket.send(JSON.stringify(r))}n&&a===n.x&&s===n.y&&(c="player"),i.push(o.a.createElement("div",{className:[c,"block"].join(" ")}))}return o.a.createElement("div",{className:"container"},i)}for(var b={x:3,y:3},f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).update=function(){this.forceUpdate()},n.escFunction=n.escFunction.bind(Object(m.a)(Object(m.a)(n))),n.update=n.update.bind(Object(m.a)(Object(m.a)(n))),n.position=b,n.enemyPos={},n.delta={x:0,y:0},n.field=[],n.name="",n.registred=!1,n.bomb=!1,n.socket=new WebSocket("ws://46.101.164.131:5000/"),n.died=!1,n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"escFunction",value:function(e){var t=this;if(!this.registred){var n={registration:1,name:"Nikita"};this.socket.send(JSON.stringify(n)),this.registred=!0}switch(this.delta={x:0,y:0},e.keyCode){case 39:this.delta={x:0,y:1};break;case 38:this.delta={x:-1,y:0};break;case 37:this.delta={x:0,y:-1};break;case 40:this.delta={x:1,y:0};break;case 32:this.bomb=!0;break;default:return}var i={delta:this.delta,position:this.position,name:this.name,time:(new Date).getTime()},o=JSON.stringify(i);console.log(i),this.socket.send(o),this.forceUpdate(function(){return t.bomb=!1}),this.delta={x:0,y:0}}},{key:"componentDidMount",value:function(){var e=this;this.socket.onmessage=function(t){var n=t.data,i=JSON.parse(n);console.log(i),i.hasOwnProperty("pos")&&(e.position=i.pos),i.hasOwnProperty("enemyPos")?e.enemyPos=i.enemyPos:e.enemyPos={},i.hasOwnProperty("died")&&(e.died=!0),e.field=i.field,e.forceUpdate()},document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){this.props.value;return this.died?o.a.createElement("div",{className:"died"},"F! You died - F5 to try enter game room"):o.a.createElement("div",{className:"App"},o.a.createElement(h,{position:this.position,field:this.field,delta:this.delta,bomb:this.bomb,callback:this.update,socket:this.socket,enemy:this.enemyPos}))}}]),t}(i.Component),p=0;p<10;p++)s.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.68eac970.chunk.js.map