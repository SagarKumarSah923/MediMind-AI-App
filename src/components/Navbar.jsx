import React from "react";

export const Navbar = () => ( <
    nav className = "bg-blue-600 text-white p-4 flex justify-between" >
    <
    h1 className = "text-xl font-bold" > MediMind - AI < /h1> <
    div className = "space-x-4" >
    <
    a href = "/"
    className = "hover:underline" > Home < /a> <
    a href = "/symptom-checker"
    className = "hover:underline" > Check Symptoms < /a> <
    a href = "/chatbot"
    className = "hover:underline" > Chatbot < /a> <
    /div> <
    /nav>
);