
export default function AboutMe(props) {
    return (
        <div className="aboutMe">
            <h3 className="aboutMeHeader">About Me</h3>
            <div className="aboutMeContent">{props.text}</div>
        </div>
    );
}