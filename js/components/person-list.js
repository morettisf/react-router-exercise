var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

// var PersonList = function() {
//     return (
//         <div className="person-list">
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//         </div>
//     );
// };

// module.exports = PersonList;

// declared as stateful component
var PersonList = React.createClass({
    render: function() {
        var people = [];
        for (var i=0; i<5; i++) {
            people.push(<Person />);
        }
        return (
            <div className="person-list">
                {people}
            </div>
        );
    }
});

module.exports = PersonList;