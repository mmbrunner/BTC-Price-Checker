import React, { Component } from "react";
import PriceCheckDataService from "../services/btc.pricechecker.service";
//import { Link } from "react-router-dom";
export default class PriceCheckList extends Component {
    constructor(props) {
        super(props);
        this.retrievePriceChecks = this.retrievePriceChecks.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
            pricecheck: [],
            currentPriceCheck: null,
            currentIndex: -1
        };
    }
    componentDidMount () {
        this.retrievePriceChecks();
    }
    retrievePriceChecks() {
        PriceCheckDataService.getTop10()
        .then(response => {
            this.setState({
                pricecheck: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    refreshList() {
        this.retrievePriceChecks();
        this.setState({
            currentPriceCheck: null,
            currentIndex: -1
        });
    }

    
    render() {
        //const { pricecheck, currentPriceCheck, currentIndex } = this.state;
        return(
            <div>
                <div className="title">
                    <h4>10 Most Recent Price Checks</h4>
                </div>
            </div>
        );  // HTML for the front page?
    }
}