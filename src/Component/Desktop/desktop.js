import React, { useState } from "react";
import './desktop.css'
import TextEditor from '../text-editor/editor.js'
import { Mobile } from "../Mobile/mobile";
import { useMediaQuery } from "react-responsive";
import { Icon } from '@iconify/react';
import angleUp from '@iconify-icons/fa/angle-up';


export const Desktop = () => {
  
  const [textValue, setTextValue] = useState("");

  const [value, setValue] = useState("");
  
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });
  /*const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });*/


    return (
      <div>{isMobileDevice?(
        <div className="mobile-background">
          <div className="bottom-Pane">
        
        <Mobile value={value}/>
        </div>
        </div>
        
      ):(
        <div className="splitScreen">
  <div className="topPane">
    <div className="customise">
      Customisation
    </div>
    <div className="sub-text">
      The text will reflect mobile view
    </div>
    <div className="text-edit">
      <div className="text-editor-nav">
      Text <Icon className="text-icon" icon={angleUp} />
      </div>

    </div>
    
    <TextEditor textValue={textValue} setTextValue={setTextValue} /> 
    
    <div className="button-pub">
      <button  class="button" onClick={() => setValue(<div dangerouslySetInnerHTML={{ __html: textValue }} />)} >Publish <span className="angle-left">&#8250;</span></button>
    </div>
  </div>


  <div className="outer-mobile-border">
  <div class="toggleButton Button"></div>
    <div class="volumeButtonUp Button"></div>
    <div class="volumeButtonDown Button"></div>
    <div class="powerButton Button"></div>
    <div className="space1 space"></div>
    <div className="space2 space"></div>
    <div className="space3 space"></div>
    <div className="space4 space"></div>

  
  <div className="mobile-blue">
    
  <div className="bottom-Pane">
  
  <div class="strip">
        
        <div class="circleHolder"><div class="circle1"></div>
        </div>
        
        <div class="stripItems">
          <div class="camera"></div>
          <div class="speaker"></div>
          
        </div>
      </div>
  <Mobile value={value}/>
  
      </div>
    </div>
  </div>
</div>
)}</div>


        )
    }