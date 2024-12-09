import React, { useEffect, useState } from 'react';
const loadStyle = (href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };
function ForbiddonError() {
    const [loading, setLoading] = useState(true);

    // Simulate loading effect and load scripts/styles after component mounts
    useEffect(() => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after the timeout
      }, 500); // Example delay of 2 seconds
  
       // Load CSS files
       loadStyle('/DashboardAssets/assets/vendor/bootstrap/css/bootstrap.min.css');
       loadStyle('/DashboardAssets/assets/vendor/font-awesome/css/font-awesome.min.css');
       loadStyle('/DashboardAssets/assets/css/main.css');
    }, []);
  return (
    <div id="wrapper" className="theme-cyan">
      <div className="vertical-align-wrap">
			<div className="vertical-align-middle auth-main">
				<div className="auth-box">
                    <div className="top">
                        <img src="DashboardAssets/assets/images/logo-white.svg" alt="Iconic"/>
                    </div>
					<div className="card">
                        <div className="header">
                            <h3>
                                <span className="clearfix title">
                                    <span className="number left">Error</span> <span className="text">403 <br/>Forbiddon Error!</span>
                                </span>
                            </h3>
                        </div>
                        <div className="body">
                            <p>You don't have permission to access / on this server.</p>
                            <div className="margin-top-30">
                                <a href="javascript:history.go(-1)" className="btn btn-default"><i className="fa fa-arrow-left"></i> <span>Go Back</span></a>
                                <a href="index.html" className="btn btn-primary"><i className="fa fa-home"></i> <span>Home</span></a>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default ForbiddonError