  import React from "react";
  class OpenLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const link = this.props.step.metadata.link || '';
        const text = this.props.step.metadata.text || '';
        return (
            <a href={link} target="_blank" style={{color : "white"}}>
                {text}
            </a>
        );
    }
}
export default OpenLink;