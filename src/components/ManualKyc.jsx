import React from "react";
import "./ManualKyc.css";

function ManualKyc() {
  return(
    <div className="main_container">
        <div className="left">
            <div className="user_card">
                <div className="user_details">
                    <img src="https://media.gettyimages.com/id/1146033097/vector/young-woman-with-glasses-working-on-laptop.jpg?s=612x612&w=gi&k=20&c=TbfsBwK83ii_e4S27Sp3vKqtevXXpJ_uozrdV1Ic8LM=" alt="profile picture" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti laborum exercitationem neque magnam, dolores maiores ex possimus reiciendis in.</p>
                </div>
                <div className="name-occupation">
                    <h1>Priyanka Chaudhary</h1>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="KYC_box">
                <h2>Become a member</h2>
                <div className="KYC_options">
                        <div className="KYC_methods"><span>E-KYC</span></div>
                        <div className="KYC_methods"><span>Manual KYC</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManualKyc;