'use strict';

class SelectWeatherBtnSet extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {area: '-', temp:'-'};

	  // This binding is necessary to make `this` work in the callback
	  this.clickCity = this.clickCity.bind(this);
	}

	clickCity(){

		var sendCity = event.target.dataset.city;

		deryeinAPI.loadWeather(sendCity, function(result){
			console.log(result);
			var areaValue = result.query.results.channel.location.city;
			var tempValue = parseInt(result.query.results.channel.item.condition.temp);
			
			var tempText = '攝氏 '+ Math.round(((tempValue + 40)/1.8 - 40)) +'度C';

			this.setState({area: areaValue, temp:tempText});
		}.bind(this));
	}


	render(){
		return(

			React.createElement("div", null, 
            	React.createElement("button", {"data-city": "taipei", type: "button", className: "btn btn-success", onClick: this.clickCity}, "Taipei"), 
            	React.createElement("button", {"data-city": "kaohsiung", type: "button", className: "btn btn-primary", onClick: this.clickCity}, "Kaohsiung"), 
        		React.createElement("div", null, "地區：", this.state.area), 
            	React.createElement("div", null, "溫度：", this.state.temp)
        	)

			
		)
	}
}


//Yahoo Weather
// class WeatherWidget extends React.Component {
//     // 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
//     constructor(props) {
//         // 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
//         super(props);
//         this.state = {}
//     }
//     // render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
//     render() {
//         return (
//         	<div>
//         		<div>地區：{this.props.area}</div>
//             	<div>溫度{this.props.temp}</div>
//         	</div>

//         )
//     }
// }

// WeatherWidget.propTypes = {
//  area: React.PropTypes.string,
//  temp: React.PropTypes.string
// }

// WeatherWidget.defaultProps = {
//  area: '未選擇',
//  temp: '未選擇'
// }


// ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));
// ReactDOM.render(<SecondMessage age="31" />, document.getElementById('app2'));
ReactDOM.render(React.createElement(SelectWeatherBtnSet, null), document.getElementById('btn-set'));
// ReactDOM.render(<WeatherWidget area = '-' temp = '0'/>, document.getElementById('weather-info'));


// deryeinAPI.loadWeather(function(result){

// 	console.log(result);

// // ReactDOM.render(<WeatherWidget age="31" />, document.getElementById('app2'));

// });

