import React from 'react'
import Slider from "../Slider/index";
import Switch from "../Switch/index";
import "./index.css";
import { useStoreContext } from '../../store/store';
import { UPDATE_ISSUES_DATA } from '../../store/actions';

function IssueRow(props) {

    console.log("important issuerow", props);
    const { issue, stance, important } = props.issueData;

    const issue_name = issue;
    const [state, dispatch] = useStoreContext();

    const handleRemove = (event) => {
        event.preventDefault();
        const current_issues = state.issuesData;
        const new_issues = current_issues.filter(issue => issue.issue !== issue_name);
        dispatch({type: UPDATE_ISSUES_DATA, issuesData: new_issues});
    }

    


    return <div className="issue-row">
        <div className="issue-row-line"> 
            <p>Issue: </p>     
            <h6 className="issue-name">{issue}</h6>
        </div>
        <div className="issue-row-line">
            <p>Stance: </p> 
            <Slider className="issue-stance" stance={stance} issueName={issue}/>
        </div>
        <div className="issue-row-line">
            <p>Importance: </p> 
            <Switch className="issue-important" important={important} issueName={issue} />
        </div>
        <div className="issue-row-line delete">
        <button onClick={(event)=> handleRemove(event)}className="delete-button" title="Delete Issue">X</button>

        </div>
    </div>
}

export default IssueRow;