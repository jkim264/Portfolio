const db = require('../../../config/db');

const conn =  db.init();

exports.list = (req,res) => {
	conn.query("select * from tb_board",(err,row) => {
		if(err) throw err;
		res.send({success:true,data:row})
	})
}

exports.add = (req,res) => {
	body = req.body; 
	sql = " INSERT INTO  ct_board (board_code, name, email, title, contents, regdate) values (?, ?, ?, ?, ?,now()) ";
	conn.query(sql,
		[body.board_code
            , body.name
            , body.email
            , body.title
            , body.contents]
		,(err,result)=>{
		if(err) throw err;

		res.send({success:true});
	})
}