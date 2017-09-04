import React from 'react';
import PeopleCard from "../../components/employee";

class Team extends React.Component {
    render(){
        return(
            <div>
                <PeopleCard 
                    name="Erfan Norozi" 
                    jobTitle="Software Developer"
                    lastSeen="2pm" 
                    avatar="https://avatars3.githubusercontent.com/u/9994172?v=4&s=460" 
                    status={false}/>
                <PeopleCard 
                    name="Ramzi Hossari" 
                    jobTitle="Software Developer" 
                    avatar="https://avatars1.githubusercontent.com/u/14273489?v=4&s=460" 
                    status={true}/>
            </div>

        );
    }
}

export default Team;
