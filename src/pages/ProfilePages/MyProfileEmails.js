import { Link } from "react-router-dom";

// function MyProfileEmails() {
//     return (
//         <>
//             <h4><i className="fa fa-comment"></i> Emails</h4>
//             <div className="accordion accordion-flush" id="accordionFlushExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="flush-headingOne">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//                             <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png" alt="#ImgNotFound" width="30px" height="30px" style={{ borderRadius: "100%" }} />
//                             &emsp; John Doe
//                         </button>
//                     </h2>
//                     <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">
//                             Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
//                             <Link to="/" type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Reply Emails</b></Link>
//                         </div><br />
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="flush-headingTwo">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//                             <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png" alt="#ImgNotFound" width="30px" height="30px" style={{ borderRadius: "100%" }} />
//                             &emsp; John Doe
//                         </button>
//                     </h2>
//                     <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">
//                             Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
//                             <Link to="/" type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Reply Emails</b></Link>
//                         </div><br />
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="flush-headingThree">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//                             <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png" alt="#ImgNotFound" width="30px" height="30px" style={{ borderRadius: "100%" }} />
//                             &emsp; John Doe
//                         </button>
//                     </h2>
//                     <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">
//                             Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
//                             <Link to="/" type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Reply Emails</b></Link>
//                         </div><br />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

function MyProfileEmails() {
  return (
    <>
      <h3 className="fw-bolder ms-3">
        <i className="fa fa-envelope"></i> Emails
      </h3>
      <br />
      {[0, 1, 2, 3, 4, 5].map((item) => {
        return (
          <div>
            <hr />
            <div className="row">
              <div className="col-10">
                <div className="d-flex align-items-center justify-content-start flex-row">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
                    alt="#ImgNotFound"
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "100%" }}
                  />
                  <div className="ps-3">
                    <p className="m-0 p-0 fw-bold">John Doe</p>
                    <p className="m-0 p-0 text-muted">
                      lorem ipsum dolar sit amit...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center justify-content-center">
                <span
                  style={{ background: "black", borderRadius: 999 }}
                  className="badge badge-dark badge-pill"
                >
                  8
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MyProfileEmails;