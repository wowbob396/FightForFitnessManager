import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

interface AuthenticationProps {
    authenticated: boolean;
    history: any;
}

export default (ComposedComponent, history) => {
    class Authentication extends Component<AuthenticationProps, any> {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (this.props.authenticated === null) {
                this.props.history.push("/login");
            }
        }
        
        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {

                this.props.history.push("/login");

            }
        }

        render() {

            if (this.props.authenticated) {
                return <ComposedComponent {...this.props} />
            } else {
                return null;
            }
        }
    }

    const mapStateToProps = state => {
        return { authenticated: state.auth }
    }

    return connect(mapStateToProps)(Authentication);
}