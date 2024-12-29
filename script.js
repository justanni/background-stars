/* Reset some basic styles */
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  
  body {
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    font-family: 'Lato', sans-serif;
  }
  
  /* Stars Layer 1 */
  #stars {
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    background: transparent;
    animation: animStar 50s linear infinite;
  }
  
  #stars2 {
    position: absolute;
    width: 2px;
    height: 2px;
    top: 0;
    left: 0;
    background: transparent;
    animation: animStar 100s linear infinite;
  }
  
  #stars3 {
    position: absolute;
    width: 3px;
    height: 3px;
    top: 0;
    left: 0;
    background: transparent;
    animation: animStar 150s linear infinite;
  }
  
  /* Title styling */
  #title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #FFF;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
  }
  
  #title span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* Animation for stars */
  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  
