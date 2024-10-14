import moment from "moment";
import { formatMomentDate, getReleaseDateRanges } from "../utils/utils";

import ReleaseVersions from "./ReleaseVersions";

const versionRanges = getReleaseDateRanges();

// eslint-disable-next-line react/prop-types
const DisplayVersion = ({mergedDate}) => {

    const showSelectedVersion = !!(mergedDate instanceof Date);    
    const prDate = moment(mergedDate);
    let selectedVersion = 'NA';

    versionRanges.forEach(range => {
        if(prDate.isBetween(range.startDate, range.endDate, undefined, [])) { 
            selectedVersion = range.version;
        }
    })

    return <>
        { showSelectedVersion && <div className="flex mt-5">
                <div className="mr-6">
                    <span className="mr-2 font-medium">Merged Date:</span>
                    <span>{formatMomentDate(prDate)}</span>
                </div>
                <div>
                    <span className="mr-2 font-medium">Fix Version</span>
                    <span className="font-medium text-green-600">{selectedVersion}</span>
                </div>
        </div>}
        <ReleaseVersions version={ selectedVersion }/>
    </>

}

export default DisplayVersion;