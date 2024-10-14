import moment from "moment";
import { DATE_RANGE, RELEASE_DATES } from "../config/release.config";

export function getDate(dateString) {
    return moment(dateString, 'DD-MM-YYYY').toDate();
}

export function getMomentDateTime(dateString) {
    return moment(dateString, 'DD-MM-YYYY HH:mm:ss');
}

export function formatMomentDate(momentDate, format='Do MMM YYYY') {
    return momentDate.format(format);
}


export function getReleaseDateRanges() {
    var range = [];

    for(let i=0; i<RELEASE_DATES.length; i++) {
        let startDate;
        if(i===0) {
            startDate = getMomentDateTime(DATE_RANGE.startDate+' 00:00:00')
        } else {
            startDate = getMomentDateTime(RELEASE_DATES[i-1].date+' 00:00:00').add(1, 'days');
        }

        let {version, date} = RELEASE_DATES[i];

        range.push({
            startDate,
            endDate: getMomentDateTime(date+' 23:59:00'),
            version
        })        
    }

    return range;
}
