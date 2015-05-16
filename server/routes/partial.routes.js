/**
 * Created by Ilonze on 16/05/15.
 */

module.exports = function(app){
    app.get('/marketplace', function(re,res){
        res.sendFile('/public/marketplace/marketplaceView.html', {root:__dirname + '/../../'});
    })
    app.get('/dashboard', function(re,res){
        res.sendFile('/public/dashboard/dashboardView.html', {root:__dirname + '/../../'});
    })
};
