import React from 'react';
import {Link} from "react-router-dom";

function DefaultButton({text, link}) {
    return (
        <Link to={link} className="px-6 py-2 inline-flex uppercase text-base font-semibold text-gray-900 bg-white transition duration-500 transform hover:text-white hover:bg-rose-600 focus:text-green-700">{text}</Link>

    );
}

export default DefaultButton;