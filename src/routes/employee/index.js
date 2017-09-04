import React from "react";
import Avatar from "material-ui/Avatar"
import { Card, CardHeader,CardActions } from 'material-ui/Card';


class EmployeePage extends React.Component {
    render(){
        return(
            <div style={{flexFlow: "row", padding: "2em"}}>
                <div style={{minWidth: "30%", display: "inline-block", padding: "0.5em"}}>
                    <Card>
                        <CardHeader
                        title={"Eric Jiang"}
                        subtitle={
                            <div>
                                <div><b>Job Title:</b> {"Job"}</div>
                                <div><b>Last Seen:</b> {"Last Seen"}</div>
                                {/* testing only */}
                            </div>
                        }
                        avatar="https://avatars3.githubusercontent.com/u/5687681?v=4&s=460"
                        />
                    </Card>
                </div>
                <div style={{minWidth: "30%", display: "inline-block"}}>B</div>
                <div style={{minWidth: "30%", display: "inline-block"}}>C</div>
            </div>
        )
    }
}

export default EmployeePage;