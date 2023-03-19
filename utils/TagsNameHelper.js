function TagsNameHelper(arr) {

	return arr.reduce((acc, item) => {
		if (acc[item.topic]) {
			acc[item.topic].push(item);
		} else {
			acc[item.topic] = [item];
		}

		return acc;
	}, {});

}

function findArticleById(arr,id){
	console.log(arr,id);
	return arr.find(it=>it.log_ID===id)
}


export  {TagsNameHelper,findArticleById}
