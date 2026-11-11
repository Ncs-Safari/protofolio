import { profile } from "@/data/resume";
import Highlight from "./Highlight";

const About = () => {
    return (
        <div className="space-y-4">
            {profile.about.map((paragraph, index) => (
                <p key={index} className="leading-normal">
                    <Highlight text={paragraph} />
                </p>
            ))}
        </div>
    );
};

export default About;
