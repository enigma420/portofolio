import React, {Component } from "react";
import TextLoop from "react-text-loop";
import cxs from "cxs/component";
import {Trans} from 'react-i18next';

const Example = cxs("div")({
    fontSize: "20px",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    color:'white'
});

const Title = cxs("div")({
    fontSize: "18px",
    textTransform: "uppercase",
    color:'gold',
});

const Section = cxs("div")({
    marginBottom: "8px",
    fontWeight:"bolder",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", cursive'
});

class TextingLoop extends Component {
    render() {
        return (
            <>
                <Section>
                    <Example>
                        <Title><Trans i18nKey="footer.title"/></Title>
                        <hr style={{margin:8}}/>
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
                            delay={400}>
                                <span>Trade faster</span>
                                <span>Increase sales</span>
                                <span>Stock winners</span>
                            </TextLoop></div>
                            <div className="column col-md-4"><TextLoop
                                springConfig={{ stiffness: 100, damping: 40 }}
                                adjustingSpeed={500}
                                delay={800}>
                                <span>Trade faster</span>
                                <span>Increase sales</span>
                                <span>Stock winners</span>
                            </TextLoop></div>
                        </div>
                    </Example>
                </Section>
            </>
        );
    }
}

export default TextingLoop;