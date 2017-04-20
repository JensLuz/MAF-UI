		// NEW DESIGN

		getTokens: function (callback) {
			var oauthRequest = new XMLHttpRequest();
			var token_endpoint_url = 'http://127.0.0.1:81/sa/oauth/token?grant_type=urn:eos:cpe:certificate&client_id=tvshop';
			var err;

			oauthRequest.open("POST", token_endpoint_url, true);
			oauthRequest.onreadystatechange = function () {

				if (oauthRequest.readyState === 4 && oauthRequest.status === 200) {
					err = 0;
					callback(err, oauthRequest.responseText);
					//return token;
					return oauthRequest.responseText;
				} else {
					token = "fail";
					err = 1;
					callback(err);
				}
			};
			oauthRequest.send();
		},
		
		getData: function (tokens, callback) {
			var apiRequest = new XMLHttpRequest();
			var api_gateway_url = 'http://whoami.cloud/whoami';
			var err2;
			
			tokenObject = JSON.parse(tokens);
			accessToken = tokenObject.access_token;

			apiRequest.open("GET", api_gateway_url, true);
			apiRequest.setRequestHeader('Authorization', 'bearer ' + accessToken);
			apiRequest.onreadystatechange = function () {
				
				if (apiRequest.readyState === 4 && apiRequest.status === 200) {
					err2 = 0;
					callback(err2, apiRequest.responseText);
					return apiRequest.responseText;
				} else {
					err2 = 1;
					callback(err2);
				}
			};
			apiRequest.send();
		},
		
		getcustomerData: function () {
			var tokens = getTokens(function(err, data){
				if (err == 0){
					statusText3.setText("Tokens retrieved");
					return data;
				} else statusText3.setText("Tokens not available");
			});
			var customerData = getData(tokens,function(err, data){
				if (err == 0){
					statusText3.setText("Customer data retrieved");
					return data;
				} else statusText3.setText("Customer data not available");
			});
			return customerData;
		},
		
		var customerDataObject = getCustomerData();