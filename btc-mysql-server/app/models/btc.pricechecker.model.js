const sql = require("./db.js");
// PriceCheck constructor
const PriceCheck = function(btcprice) {
    this.updatedISO = btcprice.updatedISO;
    this.chartName = btcprice.chartName;
    this.code = btcprice.code;
    this.rate_float = btcprice.rate_float;
};
//Creating a new ID for a new PriceCheck
PriceCheck.create = (newPriceCheck, result) => {
    sql.query("INSERT INTO pricecheck SET updatedISO = ?, chartName = ?, code = ?, rate_float = ?", newPriceCheck, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
    //May need to change id to pc_id
    console.log("created pricecheck: ", { id: res.insertId, ...newPriceCheck });
    result(null, { id: res.insertId, ...newPriceCheck });
    });
};
//SELECT TOP(10) FROM pricecheck ORDER BY updatedISO DESC
PriceCheck.getTop10 = result => {
    sql.query("SELECT * FROM (SELECT * FROM btc_pricechecker.pricecheck ORDER BY pc_id DESC LIMIT 10) Top10 ORDER BY pc_id ASC;", (err, res) => {
    if (err) {
        console.log("error: ", err);
        result,(null, err);
        return;
    }
    console.log("pricechecks: ", res);
    result(null, res);
    });
};
module.exports = PriceCheck;