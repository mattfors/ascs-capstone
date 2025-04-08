import Analytics from '@analytics/core';
import googleAnalytics from '@analytics/google-analytics';

const gaId = gaId;

const analytics = Analytics({
    app: 'ascs-capstone',
    plugins: gaId
        ? [
            googleAnalytics({
                measurementIds: [gaId],
            }),
        ]
        : [],
});

export default analytics;
