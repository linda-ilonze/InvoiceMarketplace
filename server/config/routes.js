/**
 * Created by yemi-t on 16/05/15.
 */
module.exports=function(app)
{
    app.get('/',function(req,res){
        res.sendFile('/public/index/index.html', { root: __dirname + '/../../' });
    });
}