import React, {Component } from "react";
import TextLoop from "react-text-loop";
import cxs from "cxs/component";

const Example = cxs("div")({
    fontSize: "24px"
});

const Title = cxs("div")({
    fontSize: "22px",
    textTransform: "uppercase",
    color:'gold'
});

const Section = cxs("div")({
    marginBottom: "20px",
    fontWeight:"bolder",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", cursive'
});

class TextingLoop extends Component {
    render() {
        return (
            <div>
                <Section>
                    <Example>
                        <Title>Słowa Klucz</Title>
                        <hr/>
                        <div className="row">
                            <div className="column col-md-4"><TextLoop
                                springConfig={{ stiffness: 100, damping: 40 }}
                                adjustingSpeed={500}>
                                <span>Trade faster</span>
                                <span>Increase sales</span>
                                <span>Stock winners</span>
                            </TextLoop></div>
                            <div className="column col-md-4"><TextLoop
                                springConfig={{ stiffness: 100, damping: 40 }}
                                adjustingSpeed={500}
                            delay={200}>
                                <span>Trade faster</span>
                                <span>Increase sales</span>
                                <span>Stock winners</span>
                            </TextLoop></div>
                            <div className="column col-md-4"><TextLoop
                                springConfig={{ stiffness: 100, damping: 40 }}
                                adjustingSpeed={500}
                                delay={400}>
                                <span>Trade faster</span>
                                <span>Increase sales</span>
                                <span>Stock winners</span>
                            </TextLoop></div>
                        </div>
                    </Example>
                </Section>
            </div>
        );
    }
}

export default TextingLoop;