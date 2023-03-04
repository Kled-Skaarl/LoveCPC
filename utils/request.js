

let baseURL = 'http://43.140.202.100:3000'
export const $http = function(url, method = "GET", data = {}, header = {}) {
	return new Promise((resolve, reject) => {
		var getTimestamp=new Date().getTime()
		uni.request({
			url: baseURL + url+'/'+getTimestamp,
			method,
			header: {},
			data,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(res)
			}
		})
	})
}

export const $get = function(url, data = {}, header = {}) {
	return $http(url, 'GET', data, header)
}

export const $post = function(url, data = {}, header = {}) {
	return $http(url, 'POST', data, header)
}