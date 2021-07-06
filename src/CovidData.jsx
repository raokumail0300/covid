import axios from "axios";
import { useState } from "react";

const CovidData = () => {
    const [covidApiData, setCovidApiData] = useState(null);
    let i = {}
    axios.get("https://api.covidtracking.com/v1/states/current.json",{})
    .then((res) => {
        const data = res.data;
        console.log(data)
        res.map((v,i) => {
            
        })
        
    })
    .catch((err) => {
        console.log(err);
    })
    return (
        <div>
            <h1>Hello</h1>
            <h1>Need </h1>
        </div>
    );
}

export default CovidData;