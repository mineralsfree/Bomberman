import field from "../../field";

const Logic = {
    islegal: function (pos, delta) {

        let temp = {};
        temp.x = pos.x + delta.x;
        temp.y = pos.y + delta.y;
        if (temp.x<0 || temp.y<0 || temp.x>=field.length || temp.y >field[1].length) return false;
        return field[temp.x][temp.y] === 0;
    }


};
export default Logic