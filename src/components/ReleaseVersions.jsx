import { formatMomentDate, getReleaseDateRanges } from "../utils/utils";

import "./ReleaseVersions.css";

let versionRanges = getReleaseDateRanges().map((v,i) => ({
    no: i+1,
    version: v.version,
    startDate: formatMomentDate(v.startDate),
    endDate: formatMomentDate(v.endDate)
}));


// eslint-disable-next-line react/prop-types
const ReleaseVersions = ({version}) => {
    return <table className='version-table'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Version</th>
            </tr>
        </thead>
        <tbody>
            {
                versionRanges.map(v => {
                    return <tr key={v.version} className={ version === v.version ? 'selected-version' : ''}>
                    <td>{v.no}</td>
                    <td>{v.startDate}</td>
                    <td>{v.endDate}</td>
                    <td>{v.version}</td>
                    </tr>
                })

            }
        </tbody>
    </table>

}

export default ReleaseVersions;