import React from "react";
import {Link} from "react-router-dom";
function SecondaryButton({text, link}) {
    return (
        <Link to={link} className="inline-flex text-white bg-green-700 rounded px-6 py-2 border-2 border-rose-600 text-lg transition-colors duration-700 transform hover:bg-rose-600 focus:border-green-700">{text}</Link>
    );
}

export default SecondaryButton;