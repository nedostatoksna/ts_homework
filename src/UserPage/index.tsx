import React from "react";
import { getUserInfo } from "../api/data";

const UserPage = () => {

    type getFullNameFn = (name: string, surname: string) => string
    const getFullName: getFullNameFn = (name, surname) => {
        const fullname: string = name + " " + surname;
        return fullname;
    }
    return (
        <>
            {getFullName(getUserInfo().name, getUserInfo().surname)}
            <br></br>
            {getUserInfo().age}
        </>
    )
}

export default UserPage;