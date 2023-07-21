import React from 'react';

export default function About(props) {

    // const [myStyle,setMyStyle] =useState({
    //     color : "black",
    //     backgroundColor: "white"
    // });

            let myStyle= {
                color:props.mode==="dark"?"white":"rgb(49 90 158)",
                backgroundColor:props.mode==="dark"?"rgb(49 90 158)":"white"
            };

    
  return (
    <div>
      
                <div className="accordion" id="accordionExample" >
                    <h1 className='mx-2' style={{color:props.mode==="dark"?"white":"rgb(49 90 158)"}}>About us</h1>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Benefits
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                <div className="accordion-body" style={myStyle}>
                <strong>Time-saving</strong>: Your app allows users to quickly count words and characters, as well as determine the estimated reading time for a piece of content. This saves users the effort of manually counting or using separate tools for these tasks.

                <strong>Word search and replace functionality:</strong> The ability to find and replace specific words throughout the entire text is a powerful feature. Users can avoid the time-consuming process of manually editing each occurrence of a word and replace them all at once.

                <strong>Increased productivity:</strong> By automating repetitive tasks like finding and replacing words, users can be more productive and focus on other important aspects of their work or writing.

                <strong>Accuracy</strong>: Your app ensures accurate word and character counts, which can be crucial for writers, students, and professionals who have specific word limits or character restrictions to adhere to.

                <strong>Writing improvement</strong>: The estimated reading time feature is beneficial for writers, bloggers, and content creators. It helps them gauge the readability and length of their content, which can lead to better writing and editing decisions.

                <strong>Versatility:</strong> Your web app can be used by a wide range of individuals, including writers, students, editors, bloggers, content marketers, and anyone who deals with text regularly.

                <strong>Online accessibility</strong>: Being a web app, users can access it from any device with an internet connection, making it convenient for users who work on different devices or locations.

                Time management: The time saved by using your web app's features allows users to manage their time more efficiently, ensuring they can meet deadlines and focus on other important tasks.
                </div>
                </div>
            </div>
            {/* <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div> */}
            {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStyle}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div> */}
            </div>

               

    </div>
  )
}
