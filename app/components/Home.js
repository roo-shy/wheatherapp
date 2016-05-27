var React = require('react');
var PropTypes = React.PropTypes;
var CityFormContainer = require('../containers/CityFormContainer');

 function Home (props){
   return (
    <div style={styles.patternBg}>
     <h1 style={styles.text}>Enter a City or State</h1>
     <CityFormContainer direction='column' />
    </div>
   )
 }

 module.exports = Home;
