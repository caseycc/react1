import React from "react"

function CourseItem(props) {
    return (
        <div className="tech-item">
            <p>
                <span className="tech-name">Tech Name:</span>{props.item.techname}
                <input
                    type="checkbox"
                    checked={props.item.essential}
                    onChange={() => props.handleChange(props.item.id)}
                    />
                </p>
        </div>
    )
}

export default CourseItem