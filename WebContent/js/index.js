function $(id){
	return typeof id=='string'?document.getElementById(id):id;
}

window.onload=function(){
	//获取鼠标滑过或点击的标签和要切换内容的元素
	var titles=$('notice_tit').getElementsByTagName('li'),
		divs=$('notice_con').getElementsByTagName('div');
	if(titles.length!=divs.length)
	return;
	//遍历titles下所有的li，并绑定事件
	for(var i=0;i<titles.length;i++){
		titles[i].id=i;
		titles[i].onclick=function(){
			//清除所有li上的class
			for(var j=0;j<titles.length;j++){
				titles[j].className='';
				divs[j].style.display='none';
			}
			//设置当前为高亮显示
			this.className='select';
			divs[this.id].style.display='block';
		}
	}
}
