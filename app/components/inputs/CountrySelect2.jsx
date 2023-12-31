import React, { useState } from "react";
import Select, { components } from "react-select";
// import countries from "world-countries";
import { Countries } from "@/dummyData/Countries";

const Option = (props) => (
    <div className="flex flex-row items-center p-2">
        <div style={{ fontSize: "12px" }}>{props?.data?.flag}</div>
        <div style={{ fontSize: "12px" }}>
            {props?.data?.label},
            <span className="text-neutral-500 ml-1" style={{ fontSize: "12px" }}>
                {props?.data?.region}
            </span>
        </div>
    </div>
);

const CountrySelect2 = () => {
    const [selectedCountry, setSelectedCountry] = useState(Countries[0]);

    const handleChange = (value) => {
        setSelectedCountry(value);
    };

    const DropdownIndicator = ({ children, ...props }) => (
        <div style={{ color: "#0A0A0A", fontSize: "10px" }}>▼</div>
    );

    return (
        <Select
            value={selectedCountry}
            options={Countries}
            onChange={handleChange}
            formatOptionLabel={(option) => (
                <div className="flex flex-row items-center" style={{ width: "50px" }}>
                    <div style={{ fontSize: "12px" }}>{option.flag}</div>
                </div>
            )}
            components={{
                Option,
                DropdownIndicator,
            }}
        />
    );
};

export default CountrySelect2;
