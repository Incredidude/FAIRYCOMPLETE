const controller = {};

controller.list = (req, res) => {
    res.render("checkout.html", {
        title: "Checkout",
    });
};
/*
controller.save = (req, res) => {
    const data = req.body;
    console.log(data);
    const data_query = [
        data.cId,
        data.numeroTelefonico,
        data.numeroCasa,
        data.codigoPostal,
        data.calle,
        data.ciudad,
        data.estado,
        data.pais
    ]
    console.log(data_query);
    req.getConnection((err, conn) => {
        var query = conn.query('CALL registro(?)', [data_query], (err, contact) => {
            console.log(query.sql);
            if (err) {
                res.json(err);
            }
            res.redirect('/index.html');
        });
    });
};

controller.add = (req,res) =>{
    var clienteId = req.params.id;
    var nuevo = new Nuevo(req.session.nuevo ? req.session.nuevo : {});
    req.getConnection((err, conn) =>{
        var query = conn.query('Select * from cliente', (err, cliente) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
                console.log(err);
            }
            var codigo = cliente.filter(function(item) {
                return cliente.customerId == clienteId;
              });
            req.session.nuevo = nuevo;
            console.log(req.session.nuevo);
            res.redirect('back');
        });
    }); 
}
*/
module.exports = controller;