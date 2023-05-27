var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title: 'XX Studio',
		xxstudio: 'XX Studio'
	});
});




//產品頁面(error)
router.get('/products', function(req, res, next) {
	res.render('products', { 
		title: 'products',
		xxstudio: 'XX Studio'
	});
});


//登入頁面
router.get('/login', function(req, res, next) {
	var loggedIn = false;
  	var isVIP = false;
	res.render('login', { 
		title: 'Login',
		xxstudio: 'XX Studio',
		loggedIn: loggedIn,
		isVIP: isVIP
	});
});
//註冊頁面
router.get('/registration', function(req, res, next) {
	res.render('registration', { 
		title: 'Registion',
		xxstudio: 'XX Studio'
	});
});
//購物車頁面
router.get('/cart', function(req, res, next) {
	res.render('cart', { 
		title: 'Cart',
		xxstudio: 'XX Studio'
	});
});
//聯絡頁面
router.get('/contact', function(req, res, next) {
	res.render('contact', { 
		title: 'Contact us',
		xxstudio: 'XX Studio'
	});
});

// // /* 增加新的router位置 */
// router.get('/30days', function(req, res, next) {
// 	res.render('index2', { 
// 		title: 'Express',
// 		haha: '哈哈',
// 		ironMan30: '30天鐵人賽',
// 		theTwenty: '第20天'
// 	});
// });
// //下載圖片
// router.get('/downloadimg', function(req, res, next) {
// 	res.download('public/images/12321.png')
// })

// /* 增加新的router，用GET帶參數 */
// router.get('/getparams', function(req, res, next) {
//   var idFromBrowser = req.query.id;
//   if (idFromBrowser == "123"){
//     console.log(idFromBrowser);
//   	res.send('這是id=123時的頁面'+idFromBrowser);
//   }else{
//     console.log(idFromBrowser);
//     res.send('這是其他的頁面'+idFromBrowser);	
//   }
// });

//建立一個POST的機制
// router.post('/postdemo', function(req, res, next){
// 	var userName = req.body.userName;
// 	var password = req.body.password;
// 	if(userName == 'BigQ' && password == '30days'){
// 		res.send('Hi!原來是'+ userName +'!恭喜完成29天挑戰囉！')
// 	}else{
// 		res.send('Hi!!恭喜完成29天挑戰囉！')
// 	}
//   })

// //建立一個POST的機制
// router.post('/login', function(req, res, next) {
// 	var userName = req.body.userName;
// 	var password = req.body.password;
  
// 	console.log('收到的使用者名稱：', userName);
// 	console.log('收到的密碼：', password);
// 	//管理員帳號
// 	var isVIP = userName == 'vip123123@gmail.com' && password == 'vip123123';
// 	//是否登入
// 	var loggedIn = true;
// 	res.render('login', { 
// 		title: 'Login',
// 		xxstudio: 'XX Studio',
// 		loggedIn: loggedIn,
// 		isVIP: isVIP
// 	});
//   });



router.post('/login', function(req, res) {
	var username = req.body.userName; // 從請求中獲取用戶名
	var password = req.body.password; // 從請求中獲取密碼
	console.log(username);
	console.log(password);
	// 在這裡執行 SQL 查詢，檢查是否有對應的帳號和密碼
	// 你需要使用相應的 SQL 套件來執行查詢，如 mysql、pg、sqlite 等
  
	// 範例：使用 mysql 套件執行查詢
	var mysql = require('mysql2');
  
	var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'williechu1125',
	  password: 'Tb881125',
	  database: 'mytestproject'
	});
	
	connection.connect(function(err) {
	  if (err) {
		console.error('Error connecting to MySQL database: ' + err.stack);
		return;
	  }
	
	  console.log('Connected to MySQL database as ID: ' + connection.threadId);
	
	  // 在这里执行你的数据库查询操作
	
	  connection.end();
	});
	// connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password], function(err, results) {
	//   if (err) {
	// 	console.error('Error executing query: ' + err.stack);
	// 	return res.status(500).send('Server Error');
	//   }
  
	//   if (results.length > 0) {
	// 	// 登入成功
	// 	return res.status(200).send('Login successful');
	//   } else {
	// 	// 登入失敗
	// 	return res.status(401).send('Invalid credentials');
	//   }
	// });
  
	// connection.end();
  });
  




module.exports = router;
