import React, { Component } from "react";
//import PriceCheckDataService from "../services/btc.pricechecker.service";
export default class AddPriceCheck extends Component {
    constructor(props) {
        super(props);
        this.onChangeUpdatedISO = this.onChangeUpdatedISO.bind(this);
        //do the same for code and chartName? even tho they're constant?
        this.onChangeRate_Float = this.onChangeRate_Float.bind(this);
        this.savePriceCheck = this.savePriceCheck.bind(this);
        this.newPriceCheck = this.newPriceCheck.bind(this);
        this.state = {
            pc_id: null,
            updatedISO: "",
            chartName: "Bitcoin",
            code: "USD",
            rate_float: "",
        };
    }
    onChangeUpdatedISO(e) {
        this.setState({
            updatedISO: e.target.value
        });
    }
    onChangeRate_Float(e) {
        this.setState({
            rate_float: e.target.value
        });
    }
    savePriceCheck() {
        //Need to figure out whether we need to include changes to chartName &/or code
    }

    newPriceCheck() {
        this.setState({
            id: null,
            updatedISO:"",
            chartName:"Bitcoin",
            code:"USD",
            rate_float:""
        });
    }
    // eslint-disable-next-line react/require-render-return
    render() {
        // HTML for Adding Price Check page
    }
}