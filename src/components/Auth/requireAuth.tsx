import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

interface AuthenticationProps {
    authenticated: boolean;
}

export default ComposedComponent => {
    class Authentication extends Component<AuthenticationProps, any> {
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (this.props.authenticated === null) {
                this.context.router.history.push("/login");
            }
        }
        
        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.history.push("/login");
            }
        }

        render() {

            console.log(this.props);
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