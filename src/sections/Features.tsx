import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24 ">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 ">Where power meets <span className="text-lime-400">simpicity</span></h2>
            <div>
                <FeatureCard title='Real-Time Collaboration' 
                description='Work Together seamlessly with conflict-free team editing'
                />
                <FeatureCard title='Real-Time Collaboration' 
                description='Work Together seamlessly with conflict-free team editing'
                />
                <FeatureCard title='Real-Time Collaboration' 
                description='Work Together seamlessly with conflict-free team editing'
                />
                <div>
                    <div></div>
                    <div>
                        <h3>Real-Time Collaboration</h3>
                        <p>Work Together seamlessly with conflict-free team editing</p>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <h3>Interactive Prototyping</h3>
                        <p>Engage your clients with prototypes that react to user actions </p>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <h3>Ketboard Quick Actions</h3>
                        <p>Powerful commands to help you create designs more quickly</p>
                    </div>
                </div>
            </div>
            <div>
                {features.map((feature) => (
                    <div key={feature}>
                        <span></span>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
