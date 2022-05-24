import React from "react";  
import { LanguageContext } from "./LanguageContext";

const Strings={
    en:{
        Hallo:"hallo"
    },
    it:{
        Hallo:"Ciao"
    },
    de:{
     Hallo: "lo scoprirai più in la"
    }
}
export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {language=>{
                        return (<div>
                                <h1>{Strings[language].Hallo}</h1>
                        </div>
                                )
                        }
                    }
                    
                    
                </LanguageContext.Consumer>
            </div>
        )
    }
}