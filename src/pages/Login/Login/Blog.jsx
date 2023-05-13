import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>Diffrence between controlled and unncontrolled componants?</p>
            <p>ANS:A controlled component  is controlled by React state, while an uncontrolled component is  maintains its own internal state.For react controlled componant data flow from parent to children componant,but this process is diffrent for unctrolled components because here data flow direction stay within the componants.Controlled componants data are easier to dibag ,similarly it is difficult for uncontrolled data.</p>
            <p>How to validate React props using PropType?</p>
            <p>ANS:Using react props we pass data from one componants to other.When creating/developing a react app, we  need to structure and define  props to avoid bugs and errors.A react componant will successfully render if it has defined prop.There are  a wide range of validators for configuring type definitions PropTypes .
            PropTypes is used for props validation. If some of the props aren't using the correct type that  assigned, than it  will get a console warning.  App will set after  specify validation patterns. </p>

            <p>Tell us the diffrence between nodejs and expressjs?</p>
            <p>ANS:Express is a minimal and flexible node. js web application framework,while
             Node.js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network .In compare with node.js, expressJS manages server setup clutter more efficiently.
            </p>
            <p>What is custom hook and will you create a custom hook?</p>
            <p>ANS:It is special JavaScript function which start with 'use'.It is used to call other hook.A component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.It is a reuseable function,so  it can be reused easily, which helps to make  the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code </p>
        </div>
    );
};

export default Blog;