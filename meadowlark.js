var express=require('express');

var app=express();

//设置Handlebars视图引擎(需要提前npm install express-handlebars --save )
var handlebars=require('express-handlebars').create({defaultLayout:'main'});//设置默认模板
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


app.set('port',process.env.PORT || 3000);


var fortunes = [
    "one",
    "two",
    "three",
    "four",
    "five"
];

app.use(express.static(__dirname+'/public'));//设置默认的静态文件目录，此目录不会出现在path路径里，但子目录会。必须放在其他访问处理方法的前面。

app.get('/',function(req,res){
   // res.type('text/plain');
    //res.send('Meadowlark Travel');
    res.render('home');
});

app.get('/about',function(req,res){
   // res.type('text/plain');
   // res.send('About Meadowlark Travel');
    var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about',{fortune:randomFortune});
});


//定制404页面
app.use(function  (req,res,next) {
	//res.type('text/plain');
	res.status(404);
	//res.send('404 - Not Found');
    res.render('404');
});

//定制500页面
app.use(function(err,req,res,next){
	console.error(err.stack);
	//res.type('text/plain');
	res.status(500);
	//res.send('500 -Server error');
    res.render('500');
});

app.listen(app.get('port'),function  () {
	// body...
	console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl -C to terminate.');
});
