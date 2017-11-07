var oC = document.querySelectorAll('canvas');
var timer = null;
var b = 0;
var p = ['0.75', '0.86', '0.93', '0.73', '0.76', '0.88'];
var arr = ['#4a4aff', '#6f00d2', '#ae0000', '#bf0060', '#009393', '#73bf00'];

function canvas() {
	timer = setInterval(function() {
		b += 2;
		if(b == 100) {
			clearInterval(timer);
		}
//		oC.forEach(function(ele, index) {
//			var ctx = ele.getContext('2d');
//			ctx.clearRect(0, 0, ele.width, ele.height);
//			ctx.beginPath();
//			ctx.arc(ele.offsetWidth / 2, ele.offsetHeight / 2, 68, -Math.PI / 2, `${2*Math.PI*p[index]/100*b}` - Math.PI / 2, false);
//			ctx.font = '20px 微软雅黑';
//			ctx.textAlign = 'center';
//			ctx.textBaseline = 'middle';
//			ctx.fillText(`${(p[index]*b).toFixed(0)}%`, ele.offsetWidth / 2, ele.offsetHeight / 2, 60);
//			ctx.strokeStyle = arr[index];
//			ctx.lineCap = 'round';
//			ctx.lineWidth = '14';
//			ctx.stroke();
//
//		})
		for(var i=0;i<oC.length;i++){
			(function(index){
				var ctx = oC[i].getContext('2d');
				ctx.clearRect(0, 0, oC[i].width, oC[i].height);
				ctx.beginPath();
				ctx.arc(oC[i].offsetWidth / 2, oC[i].offsetHeight / 2, 68, -Math.PI / 2, `${2*Math.PI*p[index]/100*b}` - Math.PI / 2, false);
				ctx.font = '20px 微软雅黑';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(`${(p[index]*b).toFixed(0)}%`, oC[i].offsetWidth / 2, oC[i].offsetHeight / 2, 60);
				ctx.strokeStyle = arr[index];
				ctx.lineCap = 'round';
				ctx.lineWidth = '14';
				ctx.stroke();
			})(i)
		};
		
	}, 16);
}
	
	