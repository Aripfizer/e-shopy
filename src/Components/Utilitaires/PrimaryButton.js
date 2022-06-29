import React from 'react';
import {Link} from "react-router-dom";

function PrimaryButton({text, link}) {
    return (
        <Link to={link} className="inline-flex uppercase text-base text-gray-900 transition-colors duration-500 transform hover:text-rose-600 focus:text-green-700">{text}</Link>
    );
}

export default PrimaryButton;