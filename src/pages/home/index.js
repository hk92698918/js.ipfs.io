import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Hero from 'shared/components/hero-section';
import Features from 'shared/components/features-section';
import GettingStarted from 'shared/components/getting-started-section';
import WhatCanYouBuild from 'shared/components/what-can-you-build-section';
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section';
import styles from './index.module.css';

import { register, unregister } from 'shared/service-worker/register';

class Home extends Component {
    componentDidMount() {
        // Force a clean state of the service worker, as user must interact for enabling it
        unregister();
    }

    render() {
        return (
            <div className={ styles.container }>
                <Hero />
                <Features />
                <GettingStarted />
                <WhatCanYouBuild />
                <WhatArePeopleBuilding />
                <div>
                    <button onClick={ this.handleServiceWorkerClick }>
                        <FormattedMessage id="service-worker" />
                    </button>
                </div>
            </div>
        );
    }

    handleServiceWorkerClick() {
        register();
    }
}

export default Home;