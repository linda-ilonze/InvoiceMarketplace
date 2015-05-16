/**
 * Created by yemi-t on 16/05/15.
 */
module.exports=function(app)
{
    app.get('/home',function(req,res){
        res.sendFile('/public/home/home.html', { root: __dirname + '/../../' });
    });

    app.get('/',function(req,res){
        res.sendFile('/public/index/index.html', { root: __dirname + '/../../' });
    });
}