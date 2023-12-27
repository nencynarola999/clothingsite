import React, { useState } from "react"
import { Dropdown } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
const supportLanguage = ["En", "Bn", "Es", "De"];

const Language = () => {
    const [language, setLanguage] = useState(supportLanguage[0]);

    return (
            <Dropdown autoClose="outside" className=" pt-3 pt-lg-0">
                <Dropdown.Toggle variant="auto" className="nav1link">
                    {language} <span><BiChevronDown /></span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        <div >
                            {
                                supportLanguage.map((lang) => {
                                    return (
                                        <li className="nav-item" key={lang}>
                                            <button className="dropdown-item nav1dropdown" onClick={() => setLanguage(lang)}>
                                                {lang}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </div>
                </Dropdown.Menu>
            </Dropdown>
    )
}

export default Language