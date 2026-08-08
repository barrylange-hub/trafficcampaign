"use client";
export default function PrivacySettingsButton(){
 return <button className="footer-privacy-button" type="button" onClick={()=>window.dispatchEvent(new Event("tc-open-privacy"))}>Privacy Settings</button>
}