function TagsNameHelper(obj) {
    for (var i = 0; i < obj.length; i++) {
        var tags = obj[i].TagsName.split(",");
        for (let j = 0; j < tags.length; j++) {
            var [key, value] = tags[j].split("：");
            if (!obj[i][key]) {
                obj[i][key] = [];
            }
            obj[i][key] = value;
        }

    }
    return obj;
}


export default TagsNameHelper
