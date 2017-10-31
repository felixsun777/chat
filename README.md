This is an online chatting demo program web frontend.    
By using angular2 framework, to implement a Single-Page Application to offering online chatting functionality.   
The program can connect to the backend , which is made by node.js+express+mongodb frameword, to insert new chatting records and upload files. It also will perform successfully inserted chatting records to the screen for users.   

The backend program is at 	github.com/felixsun777/chat-backend 	for your reference.   
The mobile frontend is at 	github.com/felixsun777/chat-app 		for your reference.   
   
   
这是一个在线聊天小程序的网页版前端。    
通过使用angular2框架实现了单页应用，并提供在线聊天功能。   
程序连接 node.js + express + mongodb 框架的后端程序来插入新的聊天记录并且上传文件。   
插入成功的聊天内容会被显示到程序中呈现给用户。   
   
后端程序位于 			github.com/felixsun777/chat-backend 		可供参考   
移动版前端程序位于 		github.com/felixsun777/chat-app 			可供参考   
   
   
使用说明：   
1.本前台程序需要后端服务器及数据库首先启动以提供数据支持。   
2.cd切换到程序目录'../../chat'，运行ng serve --open，程序即启动，并自动打开浏览器展示首页。   
也可以在通过在浏览器输入 http://localhost:4200/ 测试运行。   
3.在下方输入框输入聊天内容将信息发送到服务器，成功发送的信息会即时显示在本页面中，如果消息发送失败，会弹窗提示。   
4.在界面右下方的文件选择按钮可以选择要上传的文件，发送后会有提示，发送的文件会存在后台服务器的upload文件夹中。   
