import React from "react";  
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                </LanguageContext.Consumer>
            </div>
        )
    }
}