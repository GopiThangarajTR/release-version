import { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";

import "./PullRequestDate.css";
import { getDate } from "../utils/utils";
import { DATE_RANGE } from "../config/release.config";
import DisplayVersion from "./DisplayVersion";

const MIN_DATE = getDate(DATE_RANGE.startDate);
const MAX_DATE = getDate(DATE_RANGE.endDate);

const PullRequestDate = () => {
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <section>
            <div className="date-merged">
                <label htmlFor="datepicker" className="font-medium">Select Merged Date:</label>
                <div className="border-gray-500 border date-picker mt-2">
                    <Datepicker 
                        inputId="datepicker"
                        inputName="datepicker"
                        readOnly={true}
                        required={true}
                        useRange={false}
                        asSingle={true}
                        value={value} 
                        minDate={MIN_DATE}
                        maxDate={MAX_DATE}
                        displayFormat="DD/MM/YYYY"
                        onChange={newValue => setValue(newValue)}
                    />
                </div>
            </div>
            <DisplayVersion mergedDate={value.startDate} />
        </section>
    );
}

export default PullRequestDate;