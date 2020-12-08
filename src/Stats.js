import React, { useState, useEffect } from 'react';
import './Stats.css';
import axios from "axios";
import StatsRow from './StatsRow.js';

const TOKEN = "bv54t5f48v6qnllcpstg";
const BASE_URL= 'https://finnhub.io/api/v1/quote';

export default function Stats() {
    
    const [stockData, setStockData] = useState([]);
    const [myStocks, setmyStocks] = useState([]);

    const getStocksData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    }

    useEffect(() => {
        let tempStocksData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let promises = [];
        stocksList.map((stock) => {
          promises.push(
            getStocksData(stock)
            .then((res) => {
                tempStocksData.push({
                    name: stock,
                    ...res.data
                });
            })
          )
        });

        Promise.all(promises).then(()=>{
            setStockData(tempStocksData);
            console.log(tempStocksData)
          })
    }, [])


    return (
        <div className="stats">
            <div className="stats__container"> 
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {/* for our current stocks */}
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {/* stocks we can buy */}
                        {stockData.map((stock) => (
                            <StatsRow 
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
