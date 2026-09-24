const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        application: 'Jenkins DevOps Assessment',
        message: 'Application is running successfully'
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        service: 'jenkins-assessment'
    });
});

app.get('/api/status', (req, res) => {
    res.status(200).json({
        status: 'running',
        environment: process.env.NODE_ENV || 'development'
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
