import React from 'react';
import { newCandidates } from '../data';

class Filter extends React.Component{
    render() {

        function filterCandidateBySkill(candidates, skill) {
            const selectedSkillsValue = [];
            return newCandidates.filter(candidate => candidate.skills.includes(skill));
        }

        return   (<div>

            </div>
        );
    }
}

export default Filter;