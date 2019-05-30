import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

interface AuthenticationProps {
    authenticated: any;
}

export default ComposedComponent => {
    class Authentication extends Component<AuthenticationProps, any> {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (this.props.authenticated === null) {
                
            }
        }
        
    }
}