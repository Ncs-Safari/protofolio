
import {profile} from "@/data/resume";

const About = () => {
    return (
        <div className="space-y-4">
            {profile.about.map((paragraph, index) => (
                <p key={index} className="leading-normal">
                    {paragraph}
                </p>
            ))}
        </div>
    )
}

export default About;

