
// deryeinAPI.loadWeather();
	

/**
$.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202306180%20and%20u%3D%22c%22&format=json&callback=?', function(json) {
  var w_code = weather_con[json.query.results.channel.item.condition.code.toString()];
  var w_temp = json.query.results.channel.item.condition.temp + "℃";
  console.log(w_code);
  console.log(w_temp);
});
 
//這個我翻得可能不是很標準...
weather_con = {
"0":"龍捲風",
"1":"熱帶風暴",
"2":"颶風",
"3":"強雷陣雨",
"4":"雷陣雨",
"5":"混合雨雪",
"6":"混合雨雪",
"7":"混合雨雪",
"8":"冰凍小雨",
"9":"細雨",
"10":"凍雨",
"11":"陣雨",
"12":"陣雨",
"13":"飄雪",
"14":"陣雪",
"15":"吹雪",
"16":"下雪",
"17":"冰雹",
"18":"雨雪",
"19":"多塵",
"20":"多霧",
"21":"陰霾",
"22":"多煙",
"23":"狂風大作",
"24":"有風",
"25":"冷",
"26":"多雲",
"27":"晴間多雲（夜）",
"28":"晴間多雲（日）",
"29":"晴間多雲（夜）",
"30":"晴間多雲（日）",
"31":"清晰的（夜）",
"32":"晴朗",
"33":"晴朗（夜）",
"34":"晴朗（日）",
"35":"雨和冰雹",
"36":"炎熱",
"37":"雷陣雨",
"38":"零星雷陣雨",
"39":"零星雷陣雨",
"40":"零星雷陣雨",
"41":"大雪",
"42":"零星陣雪",
"43":"大雪",
"44":"多雲",
"45":"雷陣雨",
"46":"陣雪",
"47":"雷陣雨",
"3200":"資料錯誤"
};

**/