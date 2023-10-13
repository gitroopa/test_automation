const { devices } = require("playwright");

const config = {
    use: {
      headless: false,
       viewport: { width: 1500, height: 800 },
      ignoreHTTPSErrors: true,
      video: "retain-on-failure",
      screenshot: "only-on-failure",
      fullyParallel: "true",  
  },
    projects:[
        {
            name: 'Chromium',
            use:{ browserName: 'chromium'}       
        },
        {
            name: 'Firefox',
            use:{ browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use:{ browserName: 'webkit'},
        }


        
    ]
  };

  

  module.exports = config;

