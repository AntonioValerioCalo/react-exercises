import React, { createContext, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    "Hallo": "hallo",
  },
  it: {
    "Hallo": "Ciao",
  },
  de: {
    "Hallo": "lo scoprirai più in la",
  },
};
export function DisplayLanguage() {
  const context = useContext(LanguageContext);
  return (
    <div>
   
        
        <div>
          <h1>{Strings[context]["Hallo"]}</h1>
        </div>
        
    </div>
  );
}
