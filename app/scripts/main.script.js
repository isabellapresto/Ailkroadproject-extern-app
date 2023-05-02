
  var orderData = JSON.parse(localStorage.getItem('orders'));

if(localStorage.getItem('orders')){
  console.log(orderData);
  displayOrders(orderData)
} else {
  fetchData();
}


function fetchData(){  
  var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
  fetch("http://localhost:8888/the_silk_road_project/wp-json/wc/v3/products?oauth_consumer_key=ck_677a936c591ca7de5803c4cd90953962db1d5e3b&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683033891&oauth_nonce=J3zzNiBS4xT&oauth_version=1.0&oauth_signature=LhUsdvMgBEtCjdfbPJIbfABRBas%3D", requestOptions)
          .then(response => response.json())
          .then(result => { orderData = result;
          console.log(orderData);
          localStorage.setItem('orders', JSON.stringify(orderData))} )
          .catch(error => console.log('error', error));
}



fetchData();
